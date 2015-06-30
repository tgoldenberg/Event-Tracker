var Table = Reactable.Table;

var EventTable = React.createClass({
  getInitialState: function() {
    return {events: this.props.events, eventTable: []};
  },
  render: function() {

    var eventTable = [];
    this.state.events.map(function(event, idx) {
      eventTable.push({id: idx+1, category: event.category, name: event.name, location: event.location, startTime: event.startTime, endTime: event.endTime});
    })
    return (
      <Table className="table" sortable={['location', 'name', 'startTime']} data={eventTable} itemsPerPage={10}/>
    );
  }
});
