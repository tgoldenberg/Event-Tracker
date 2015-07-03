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
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        disableDefaultUI: true
      }
      var map = new google.maps.Map(mapCanvas, mapOptions);
      var myLatLng = new google.maps.LatLng(44.5403, -78.5463)

      var infoWindow = new google.maps.InfoWindow();
      var index = 0;


      var filteredEvents = events.map(function(event, idx) {
        if (event.latitude != undefined) {
          var marker = new google.maps.Marker({
          position: new google.maps.LatLng(event.latitude, event.longitude),
          map: map,
          title: idx.toString(),
          });

          marker.setMap(map);
          google.maps.event.addListener(marker, 'mouseover', function() {
            infoWindow.close();
            infoWindow.setContent(event.name);
            infoWindow.open(map, marker);
            $('#' + marker.title + " .table-content").addClass("table-active");
          });

          google.maps.event.addListener(marker, 'mouseout', function() {
            $('#' + marker.title + " .table-content").removeClass("table-active");
          });

          $('.table-content').on('mouseover', function() {
            var index = $(this).parent().attr('id');
            if (marker.title == index) {
              infoWindow.close();
              infoWindow.setContent(event.name);
              infoWindow.open(map, marker);
            }
          });
        }
      });

    }

    var events = this.state.events;
      $(function() {
        initialize(this.state.events);
      }.bind(this));
  },
  render: function() {
    var myEvents = this.props.events.map(function(event, idx) {
      console.log(event.latitude);
      if (event.latitude != "") {
        return <tr id={idx} ><th className="table-header">{idx + 1}</th><th className="table-content"><a href="#">{event.name}</a></th></tr>;
      }
    });
    return (
      <div className="map col-sm-11">
        <br/>
        <div className="well hero-panel">
          <Icons/>
        </div><br/>
      <div className="col-sm-8">
        <div id="map-canvas"></div><br/><br/>
      </div>
      <div className="col-sm-4">
        <table className="table table-bordered map-table">
          <tbody>
            {myEvents}
          </tbody>
        </table>
      </div>
      </div>

    );
  }
});
