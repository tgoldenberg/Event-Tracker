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
            date: new Date().toLocaleString().split(",")[0],
            location: {
              latitude: fordhamLatitude,
              longitude: fordhamLongitude
            },
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
  renderAttending: function() {
    console.log("ATTENDING EVENTS HERE");
    var userEvents = this.state.userEvents;
    console.log(userEvents);
    console.log(this.state.data);
    this.setState({data: userEvents});
  },

  handleSearch: function() {
    // change AJAX search criteria
    genericEvents = {};
    apiData = [];

    var month = this.state.date.split("/")[0];
    var day = this.state.date.split("/")[1];
    var year = this.state.date.split("/")[2];

    var date = new Date(this.state.date);
    var nextDate = new Date(date.getTime() + 1000*60*60*24*7);


    nextDate.setMinutes(date.getMinutes() + 60*24);
    nextDate = nextDate.toLocaleString().split(",")[0];

    var nextMonth = nextDate.split("/")[0];
    var nextDay = nextDate.split("/")[1];
    var nextYear = nextDate.split("/")[2];
    nextMonth = nextMonth < 10 ? "0" + nextMonth : nextMonth;
    nextDay = nextDay < 10 ? "0" + nextDay : nextDay;
    var APIDateRange = "&date_range=" + year + "-" + month + "-" + day + ":" + nextYear + "-" + nextMonth + "-" + nextDay;
    console.log(APIDateRange);
    var meetupApiDate = new Date(this.state.date).getTime();
    var meetupApiEndDate = meetupApiDate + (1000*60*60*24*7);

    var categoryFilter = "";
    var meetupFilter = "";
    var latitude = this.state.location.latitude;
    var longitude = this.state.location.longitude;
    var categoryParams = this.state.checkboxSummary;
    console.log(categoryParams);

    switch(categoryParams) {
      case "Music ":
        categoryFilter = "filters=category:Jazz";
        meetupFilter = "topic=music";
        break;
      case "Arts ":
        categoryFilter = "filters=category:Art";
        meetupFilter = "topic=art";
        break;
      case "Comedy ":
        categoryFilter = "filters=category:Comedy";
        meetupFilter = "topic=comedy";
        break;
      case "Tech ":
        categoryFilter = "filters=category:Technology";
        meetupFilter = "topic=technology";
        break;
      case "Sports ":
        categoryFilter = "filters=category:Sports";
        meetupFilter = "topic=sports"
        break;
      default:
        categoryFilter="&sort=times_pick+asc";
        break;
    }

    $.ajax({
      url: "http://api.nytimes.com/svc/events/v2/listings.jsonp?"+ categoryFilter + APIDateRange + "&limit=40&ll=" + latitude + "," + longitude + "&radius=25000&api-key=" + nyTimesKey,
      method: "get",
      dataType: "jsonp",
      crossDomain: "true",
      success: function(nyTimesData) {
        var events = {};
        events.nyTimesEvents = nyTimesData;
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
          apiData.push({category: category, name: name, url: url, location: location, startTime: startTime, endTime: endTime, latitude: latitude, longitude: longitude});
        });
        this.setState({data: shuffle(apiData)});

      }.bind(this),
      error: function(err) {
        console.log(err);
      }
    });

    $.ajax({
      url: "https://api.meetup.com/2/open_events?&sign=true&photo-host=public&lat="+ latitude + "&lon=" + longitude + "&" + meetupFilter + "&time=" + meetupApiDate + "," + meetupApiEndDate + "&radius=15&page=20&order=time&status=upcoming&key=d301d1e5146535e25514724a1e2858",
      method: 'get',
      dataType: "jsonp",
      success: function(meetupData) {
        var events = this.state.genericEvents;
        events.meetupEvents = meetupData;
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
          apiData.push({category: category, name: name, url: url, location: location, startTime: startTime, endTime: endTime, latitude: latitude, longitude: longitude})

        });
        this.setState({data: shuffle(apiData)});

      }.bind(this),
      error: function(err) {
        console.log(err);
      }
    });
    return false;
  },

  callAPIs: function() {
    var genericEvents = this.state.genericEvents;
    var data = this.state.data;

    $.ajax({
      url: "http://api.nytimes.com/svc/events/v2/listings.jsonp?limit=40&ll=40.862040%2C-73.885699&radius=12000&api-key=" + nyTimesKey,
      method: "get",
      dataType: "jsonp",
      crossDomain: "true",
      success: function(data) {
        var events = {};
        events.nyTimesEvents = data;
        var prevData = this.state.data;
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
        var prevData = this.state.data;
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

  componentWillMount: function() {
    // call for session user information

    this.callAPIs();

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
  },

  addEvent: function(events) {
    console.log("ADD/REMOVE EVENT");
    this.setState({userEvents: events});
  },

  handleNewDate: function(date) {
    this.setState({date: date});
  },

  handleNewLocation: function(location) {
    // console.log("NEW LOCATION", location);
    var latitude = location.A;
    var longitude = location.F;
    this.setState({location: {latitude: latitude, longitude: longitude}});
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
            <SideNavbar userEvents={this.state.userEvents} renderAttending={this.renderAttending} />
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
              handleSearch={this.handleSearch}
              handleNewDate={this.handleNewDate}
              handleNewLocation={this.handleNewLocation}
               />
          </div>
        </div>
      </div>
    );
  }
});
