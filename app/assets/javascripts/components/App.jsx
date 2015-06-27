/** @jsx React.DOM */

var RouteHandler = ReactRouter.RouteHandler;
var Link = ReactRouter.Link;

var App = React.createClass({
  getInitialState: function() {
    return {user: {}, genericEvents: {}}
  },
  render: function() {
    return (
      <div>
        <br/>
        <div className="container-fluid">
          <RouteHandler />
        </div>
      </div>
    );
  }
});
