var Nav = React.createClass({
  render: function() {
    return (
      <header className="navigation" role="banner">
        <div className="navigation-wrapper">
          <a href="javascript:void(0)" className="logo">
            <img src="https://raw.githubusercontent.com/thoughtbot/refills/master/source/images/placeholder_logo_1.png" alt="Logo Image"/>
          </a>
          <a href="javascript:void(0)" className="navigation-menu-button" id="js-mobile-menu">MENU</a>
          <nav role="navigation">
            <ul id="js-navigation-menu" className="navigation-menu show">
              <li className="nav-link"><Link to="/">Home</Link></li>
              <li className="nav-link right-link"><Link to="/calendar">Calendar</Link></li>
              <li className="nav-link right-link"><Link to="/map">Map</Link></li>
              <li className="nav-link right-link">Logged in as:</li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
});
