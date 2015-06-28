var Table = Reactable.Table;


var EventTable = React.createClass({
  render: function() {
    return (
      <Table className="table" sortable={['Name', 'Age', 'Position']} data={[
              { Name: 'Griffin Smith', Age: 18 },
              { Age: 23,  Name: 'Lee Salminen' },
              { Age: 28, Position: 'Developer' },
          ]} />
    );
  }
});
