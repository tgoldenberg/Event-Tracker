/** @jsx React.DOM */

var RouteHandler = ReactRouter.RouteHandler;
var Link = ReactRouter.Link;

var App = React.createClass({
  getInitialState: function() {
    console.log(this.props);
    return {user: {}, genericEvents: {}}
  },
  componentWillMount: function() {
    $.ajax({
      url: "/sessions/which_user",
      method: "get",
      dataType: "json",
      success: function(data) {
        this.setState({user: data});
      }.bind(this),
      error: function(err) {
        console.log(err);
      }
    });
  },
  handleHover: function(e) {
    e.preventDefault();
    $('.sliding-panel-content, .sliding-panel-fade-screen').removeClass('is-visible');
  },
  render: function() {
    return (
      <div>
        <div className="container-fluid">
          <div className="col-sm-1">
            <SideNavbar />
          </div>
          <div className="col-sm-11" onMouseOver={this.handleHover}>
            <RouteHandler/>
          </div>
        </div>
      </div>
    );
  }
});
