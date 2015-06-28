var Map = React.createClass({
  componentDidMount: function() {
    function initialize() {
      var mapCanvas = document.getElementById("map-canvas");
      var mapOptions = {
        center: new google.maps.LatLng(44.5403, -78.5463),
        zoom: 8,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }
      var map = new google.maps.Map(mapCanvas, mapOptions);
      var myLatLng = new google.maps.LatLng(44.5403, -78.5463)
      var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      title: "Hello!"
      });
      marker.setMap(map);
    };


    $(function() {
      initialize();

    });
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
