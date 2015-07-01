var Table = Reactable.Table;

var EventTable = React.createClass({
  getInitialState: function() {
    return {events: this.props.events, eventTable: []};
  },
  handleClick: function(e) {
    e.preventDefault();
    var target = $(e.target);
    var id = parseInt(target.context.dataset.id);
    var event = this.props.events[id];
    var user_id = parseInt(this.props.user.id);
    var glyphiconClass = $(e.target).context.className;

    if (glyphiconClass.split(" ")[2] == "glyphicon-plus") {
      $.ajax({
        url: "/events/add",
        method: "get",
        dataType: "json",
        data: {user_id: user_id, event: {title: event.name, category: event.category, url: event.url, location: event.location, latitude: event.latitude, longitude: event.longitude, start_time: event.startTime, end_time: event.endTime}},
        success: function(data) {
          console.log(data);
          target.context.className = "submit-button glyphicon glyphicon-minus";
          this.props.handleNewEvent(data);
          return false;

        }.bind(this),
        error: function(err) {
          console.log(err);
        }
      });
    } else if (glyphiconClass.split(" ")[2] == "glyphicon-minus") {
      $.ajax({
        url: '/events/remove',
        method: 'get',
        dataType: 'json',
        data: {user_id: user_id, event: {title: event.name }},
        success: function(data) {
          console.log(data);
          target.context.className = "submit-button glyphicon glyphicon-plus";
          this.props.handleNewEvent(data);
          return false;
        }.bind(this),

        error: function(err) {
          console.log(err);
        }
      });
    }
  },
  render: function() {

    var eventTable = [];

    this.props.events.map(function(event, idx) {
      var dateOptions = {
      weekday: "long", year: "numeric", month: "short",
      day: "numeric", hour: "2-digit", minute: "2-digit"
      };
      var addButton = <a href="#" data-id={idx} onClick={this.handleClick} className="submit-button glyphicon glyphicon-plus"></a>;
      var urls = [1, 2];
      if (this.props.userEvents) {
        this.props.userEvents.map(function(e) {
          urls.push(e.title);
        });
        urls.forEach(function(ele) {
          if (ele == event.name) {
            addButton = <a href="#" data-id={idx} onClick={this.handleClick} className="submit-button glyphicon glyphicon-minus"></a>;
          } else {
            addButton = <a href="#" data-id={idx} onClick={this.handleClick} className="submit-button glyphicon glyphicon-plus"></a>;
          }
        }.bind(this));
      }

      var startTime = event.startTime.toLocaleTimeString("en-us", dateOptions);
      var endTime = event.endTime == "n/A" ? "n/A" : event.endTime.toLocaleTimeString("en-us", dateOptions);
      eventTable.push({category: event.category, name: <a href={event.url}>{event.name}</a>, location: event.location, start_time: startTime, end_time: endTime, add: addButton});
    }.bind(this))
    return (
      <Table className="table" sortable={['location', 'name', 'startTime']} data={eventTable} itemsPerPage={10}/>
    );
  }
});
