function shuffle(o){
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}

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

var Landing = React.createClass({
  getInitialState: function() {
    return {genericEvents: {}, data: []};
  },
  componentWillMount: function() {
    // call for Eventbrite event info
    // $.ajax({
    //   url : eventbriteAPICall,
    //   method: 'get',
    //   dataType: 'json',
    //   success: function(data) {
    //     var events = this.state.genericEvents;
    //     events.eventbriteEvents = data;
    //     this.setState({genericEvents: events });
    //   }.bind(this),
    //   error: function(err) {
    //     console.log(err);
    //   }
    // });

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
          if (idx < 10) {
            var name = ele.event_name;
            var url  = ele.venue_detail_url;
            var location = ele.street_address + ", " + ele.neighborhood;
            var startTime = new Date(ele.recurring_start_date);
            if (ele.recurring_end_date != undefined) {
              var endTime = new Date(ele.recurring_end_date);
            } else {
              var endTime = "N/A";
            }
            var category = ele.category;
            var latitude = ele.geocode_latitude;
            var longitude = ele.geocode_longitude;
            prevData.push({category: category, name: <a href={url}>{name}</a>, location: location, startTime: startTime, endTime: endTime, latitude: latitude, longitude: longitude });
          }
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
          if (idx < 10) {
            var name = ele.name;
            var url = ele.event_url;
            var location = ele.venue ? ele.venue.name + ", " + ele.venue.address_1 : "";
            var date1 = new Date(0);
            var date2 = new Date(0); // The 0 there is the key, which sets the date to the epoch
            date1.setUTCSeconds(parseInt(ele.time));
            date2.setUTCSeconds((parseInt(ele.time) + parseInt(ele.duration)));
            var startTime = date1;
            if (endTime != undefined) {
              var endTime = date2;
            } else {
              var endTime = "n/A";
            }
            var latitude = ele.venue? ele.venue.lat : "";
            var longitude = ele.venue? ele.venue.lon : "";
            var category = ele.group.who;
            prevData.push({category: category, name: <a href={url}>{name}</a>, location: location, startTime: startTime.toString(), endTime: endTime.toString(), latitude: latitude, longitude: longitude})
          }
        });
        this.setState({genericEvents: events, data: shuffle(prevData)});

      }.bind(this),
      error: function(err) {
        console.log(err);
      }
    });
  },
  render: function() {
    return (
      <div className="landing">
        <div className="container-fluid">
          <LandingHero events={this.state.data}/>
          <LoginSidebar />
        </div>
      </div>
    );
  }
});
