function shuffle(o){
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}

var RouteHandler = ReactRouter.RouteHandler;
var Link = ReactRouter.Link;
// api keys
var nyTimesKey = "942aa522f72d0fe2040b9b94a50c5b19:3:69755580"
var eventbriteKey = "D4EKL2FV2PELYSSXBA34"

var fordhamLatitude = "40.862040";
var fordhamLongitude = "-73.885699";

var nyTimesVersion = "v2";
var eventbriteVersion = "v3";

var nyTimesBaseURL = "http://api.nytimes.com/svc/events/"
var eventbriteBaseURL = "https://www.eventbriteapi.com/"

var nyTimesAPICall = nyTimesBaseURL + nyTimesVersion + "/listings.json?ll=40.862040%2C-73.885699&radius=10000&api-key=" + nyTimesKey;
var eventbriteAPICall = eventbriteBaseURL + eventbriteVersion + "/events/search/?sort_by=date&location.within=20mi&location.latitude=" + fordhamLatitude + "&location.longitude=" + fordhamLongitude + "&token=" + eventbriteKey;

var App = React.createClass({
  getInitialState: function() {
    return {user: {},
            genericEvents: {},
            data: [],
            attendingEvents: [],
            userEvents: [],
            checkboxSummary: "All",
            checkbox: {

              Music: false,
              Sports: false,
              Tech: false,
              Arts: false,
              Comedy: false
              }
            };
  },

  componentWillMount: function() {
    // call for session user information
    $.ajax({
      url: "/sessions/which_user",
      method: "get",
      dataType: "json",
      success: function(data) {
        this.setState({user: data.user, userEvents: data.events});
      }.bind(this),
      error: function(err) {
        console.log(err);
      }
    });

    // call for Eventbrite event info
    $.ajax({
      url : eventbriteAPICall,
      method: 'get',
      dataType: 'json',
      success: function(data) {
        var events = this.state.genericEvents;
        events.eventbriteEvents = data;
        this.setState({genericEvents: events });
      }.bind(this),
      error: function(err) {
        console.log(err);
      }
    });

    // call for NYTimes event info
    $.ajax({
      url: "http://api.nytimes.com/svc/events/v2/listings.jsonp?ll=40.862040%2C-73.885699&radius=12000&api-key=" + nyTimesKey,
      method: "get",
      dataType: "jsonp",
      crossDomain: "true",
      success: function(data) {
        var events = this.state.genericEvents;
        events.nyTimesEvents = data;
        prevData = this.state.data;
        events.nyTimesEvents.results.forEach(function(ele, idx) {
          var name = ele.event_name;
          var url  = ele.venue_detail_url;
          var location = ele.street_address + ", " + ele.neighborhood;
          var startTime = new Date(ele.recurring_start_date);
          var category = ele.category;
          var latitude = ele.geocode_latitude;
          var longitude = ele.geocode_longitude;
          if (ele.recurring_end_date != undefined) {
            var endTime = new Date(ele.recurring_end_date);
          } else {
            var endTime = "n/A";
          }
          prevData.push({category: category, name: name, url: url, location: location, startTime: startTime, endTime: endTime, latitude: latitude, longitude: longitude});

        });
        this.setState({genericEvents: events, data: shuffle(prevData)});
      }.bind(this),

      error: function(err) {
        console.log(err);
      }
    });

    // call for Meetup event info
    $.ajax({
      url: "https://api.meetup.com/2/open_events?&sign=true&photo-host=public&lat=40.862040&lon=-73.885699&radius=15&page=20&order=time&status=upcoming&key=d301d1e5146535e25514724a1e2858",
      method: 'get',
      dataType: "jsonp",
      success: function(data) {
        var events = this.state.genericEvents;
        events.meetupEvents = data;
        prevData = this.state.data;
        events.meetupEvents.results.forEach(function(ele, idx) {
          var name = ele.name;
          var url = ele.event_url;
          var location = ele.venue ? ele.venue.name + ", " + ele.venue.address_1 : "";
          var startTime = new Date(ele.time);
          var date2 = new Date(ele.time); // The 0 there is the key, which sets the date to the epoch
          var duration = ele.duration / 60000;
          date2.setMinutes(date2.getMinutes() + duration);
          var endTime = date2;
          if ( !endTime.getTime()) {
            endTime = "n/A";
          }

          var latitude = ele.venue ? ele.venue.lat : "";
          var longitude = ele.venue ? ele.venue.lon : "";
          var category = ele.group.who;
          prevData.push({category: category, name: name, url: url, location: location, startTime: startTime, endTime: endTime, latitude: latitude, longitude: longitude})

        });
        this.setState({genericEvents: events, data: shuffle(prevData)});

      }.bind(this),
      error: function(err) {
        console.log(err);
      }
    });
  },
  addEvent: function(events) {
    console.log("ADD EVENT");
    this.setState({userEvents: events});
  },

  handleCheckboxChange: function(target) {
    var checkbox = this.state.checkbox;
    var value = !checkbox[target];
    var categories = this.state.checkbox;

    checkbox[target] = value;
    var summary = "";
    for (category in this.state.checkbox) {
      // console.log(category);
      if (categories[category]) {
        summary += category + " ";
      }
    }
    console.log(summary);
    if (summary.length == 0 || summary.split(" ").length == 6) {
      summary = "All";
    }
    this.setState({checkbox: checkbox, checkboxSummary: summary});
  },

  handleHover: function(e) {
    e.preventDefault();
    $('.sliding-panel-content, .sliding-panel-fade-screen').removeClass('is-visible');
  },

  render: function() {

    return (
      <div>
        <div className="container-fluid">
          <div className="col-sm-1">
            <SideNavbar />
          </div>
          <div className="col-sm-11" onMouseOver={this.handleHover}>
            <RouteHandler
              events={this.state.data}
              user={this.state.user}
              handleNewEvent={this.addEvent}
              userEvents={this.state.userEvents}
              handleCheckboxChange={this.handleCheckboxChange}
              checkbox={this.state.checkbox}
              checkboxSummary={this.state.checkboxSummary}
               />
          </div>
        </div>
      </div>
    );
  }
});
