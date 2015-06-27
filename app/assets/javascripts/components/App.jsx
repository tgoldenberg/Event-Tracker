/** @jsx React.DOM */

var RouteHandler = ReactRouter.RouteHandler,
    Link = ReactRouter.Link;

var App = React.createClass({
  render: function() {
    return (
      <div>
        <header className="navigation" role="banner">
          <div className="navigation-wrapper">
            <a href="javascript:void(0)" className="logo">
              <img src="https://raw.githubusercontent.com/thoughtbot/refills/master/source/images/placeholder_logo_1.png" alt="Logo Image"/>
            </a>
            <a href="javascript:void(0)" className="navigation-menu-button" id="js-mobile-menu">MENU</a>
            <nav role="navigation">
              <ul id="js-navigation-menu" className="navigation-menu show">
                <li className="nav-link">Home</li>
                <li className="nav-link right-link">Sign Up</li>
                <li className="nav-link right-link">Logout</li>
                <li className="nav-link right-link">Logged in as:</li>
              </ul>
            </nav>
          </div>
        </header>

        <div className="well">
          <Link to='/'>Discover</Link>
          <Link to='/calendar'>Calendar</Link>
          <Link to='/map'>Map</Link>
        </div>

        <RouteHandler />
      </div>
    );
  }
});
