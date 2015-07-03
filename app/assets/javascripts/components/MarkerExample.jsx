var MarkerExample = React.createClass({
  getInitialState: function() {
    return {marker: ""};
  },

  componentDidMount: function() {
    this.marker = new google.maps.Marker({
    position: new google.maps.LatLng(this.props.event.latitude, this.props.event.longitude),
    map: this.props.map,
    title: "Title"
    });
    this.marker.setMap(this.props.map);
  },
  render: function() {
    return null;
  }
});
