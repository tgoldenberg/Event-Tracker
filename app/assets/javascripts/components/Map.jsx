var fordhamLatitude = "40.862040";
var fordhamLongitude = "-73.885699";

var Map = React.createClass({
  getInitialState: function() {
    return {events: this.props.events};
  },
  componentDidMount: function() {
    function initialize(events) {
      var mapCanvas = document.getElementById("map-canvas");
      var mapOptions = {
        center: new google.maps.LatLng(fordhamLatitude, fordhamLongitude),
        zoom: 11,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }
      var map = new google.maps.Map(mapCanvas, mapOptions);
      var myLatLng = new google.maps.LatLng(44.5403, -78.5463)


      events.map(function(event) {
        var marker = new google.maps.Marker({
        position: new google.maps.LatLng(event.latitude, event.longitude),
        map: map,
        title: "Title"
        });
        marker.setMap(map);
      });
    }

    var events = this.state.events;
    console.log(events);
      $(function() {
        initialize(this.state.events);
      }.bind(this));
  },
  render: function() {
    return (
      <div className="map col-sm-11">
        <br/>
        <div className="well hero-panel">
          <Icons/>
        </div><br/>
        <div id="map-canvas"></div>
      </div>

    );
  }
});
