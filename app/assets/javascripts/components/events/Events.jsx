var Events = React.createClass({
  getInitialState: function() {
    return {event: {}};
  },

  componentDidMount: function() {
    var id = this.props.params.id;
    this.fetchData();
  },

  fetchData: function() {
    $.ajax({
      url: "/events/" + this.props.params.id,
      method: "get",
      dataType: "json",
      data: {id: this.props.params.id},
      success: function(data) {
        this.setState({event: data});
      }.bind(this),
      error: function(err) {
        console.log(err);
      }
    });
  },

  render: function() {
    return (
      <div className="events-show-holder">
        <h4>{this.state.event.category}</h4>
        <h1>{this.state.event.name}</h1>
        <hr/>
        <p dangerouslySetInnerHTML={{__html: this.state.event.description}} />

        <a href={this.state.event.url}>Link to event page</a>
        <br/>
        <hr/>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Starts</th>
              <th>Ends</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{this.state.event.startTime}</td>
              <td>{this.state.event.endTime}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
});
