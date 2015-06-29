var Table = Reactable.Table;

var EventTable = React.createClass({
  getInitialState: function() {
    return {events: this.props.events};
  },
  render: function() {
    return (
      <Table className="table" sortable={['location', 'name', 'startTime']} data={this.state.events} />
    );
  }
});
