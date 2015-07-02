var fordhamLatitude = 40.862040;
var fordhamLongitude = -73.885699;
var mapLocation = [fordhamLatitude, fordhamLongitude];
var ReactMap = React.createClass({

  render: function() {

    return (
      <div className="reactMap" style={{height:400}}>
        <GoogleMapReact center={this.props.center} zoom={this.props.zoom}>
          <MarkerExample text={'A'} lat={fordhamLatitude} lng={fordhamLongitude}/>
        </GoogleMapReact>
      </div>

    );
  }
});
