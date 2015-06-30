var Table = Reactable.Table;

var EventTable = React.createClass({
  getInitialState: function() {
    return {events: this.props.events, eventTable: []};
  },
  handleClick: function(e) {
    e.preventDefault();
    var target = $(e.target);
    var id = parseInt(target.context.dataset.id);
    var event = this.state.events[id];
    var user_id = parseInt(this.props.user.id);
    $.ajax({
      url: "/events/add",
      method: "get",
      dataType: "json",
      data: {user_id: user_id, event: {title: event.name, category: event.category, url: event.url, location: event.location, latitude: event.latitude, longitude: event.longitude, start_time: event.startTime, end_time: event.endTime}},
      success: function(data) {
        console.log(data);
        target.context.className = "submit-button glyphicon glyphicon-minus";
        this.props.handleNewEvent(data);

      }.bind(this),
      error: function(err) {
        console.log(err);
      }
    });
  },
  render: function() {

    var eventTable = [];

    this.state.events.map(function(event, idx) {
      var dateOptions = {
      weekday: "long", year: "numeric", month: "short",
      day: "numeric", hour: "2-digit", minute: "2-digit"
      };

      var startTime = event.startTime.toLocaleTimeString("en-us", dateOptions);
      var endTime = event.endTime == "n/A" ? "n/A" : event.endTime.toLocaleTimeString("en-us", dateOptions);
      eventTable.push({category: event.category, name: <a href={event.url}>{event.name}</a>, location: event.location, start_time: startTime, end_time: endTime, add: <a href="#" data-id={idx} onClick={this.handleClick} className="submit-button glyphicon glyphicon-plus"></a>});
    }.bind(this))
    return (
      <Table className="table" sortable={['location', 'name', 'startTime']} data={eventTable} itemsPerPage={10}/>
    );
  }
});
