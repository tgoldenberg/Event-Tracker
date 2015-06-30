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
    console.log(event);
  },
  render: function() {

    var eventTable = [];
    this.state.events.map(function(event, idx) {
      eventTable.push({id: idx+1, category: event.category, name: event.name, location: event.location, startTime: event.startTime, endTime: event.endTime, add: <a href="#" data-id={idx} onClick={this.handleClick} className="submit-button glyphicon glyphicon-plus"></a>});
    }.bind(this))
    return (
      <Table className="table" sortable={['location', 'name', 'startTime']} data={eventTable} itemsPerPage={10}/>
    );
  }
});
