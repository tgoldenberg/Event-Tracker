var Link = ReactRouter.Link;

var Icons = React.createClass({
  render: function() {
    return (
      <div className="icon-holder">
        <div className="view-button-holder">
          <Link to="/">
            <span className="glyphicon glyphicon-th-list tooltip-item">
              <div className="tooltip">
                <p>List View</p>
              </div>
            </span>
          </Link>
        </div>
        <div className="view-button-holder">
          
          <Link to="/calendar">
            <span className="glyphicon glyphicon-calendar tooltip-item">
              <div className="tooltip">
                <p>Calendar View</p>
              </div>
            </span>
          </Link>
        </div>
        <div className="view-button-holder">
          <Link to="/map">
            <span className="glyphicon glyphicon-map-marker tooltip-item">
              <div className="tooltip">
                <p>Map View</p>
              </div>
            </span>
          </Link>
        </div>
      </div>
    );
  }
});
