var SideNavbar = React.createClass({
  handleHover: function() {
    $('.sliding-panel-content, .sliding-panel-fade-screen').addClass('is-visible');
  },
  render: function() {
    return (
      <div className="side-nav-holder" onMouseOver={this.handleHover}>
        <div className="side-navbar hidden-xs">
          <span className="glyphicon glyphicon-home"></span>
          <span className="glyphicon glyphicon-folder-open"></span>
          <span className="glyphicon glyphicon-globe"></span>
          <span className="glyphicon glyphicon-user"></span>
        </div>
        <div className="js-menu sliding-panel-content hidden-xs">
          <p className="home-side-nav side-nav-link">Home</p>
          <p className="side-nav-link">MyTracks</p>
          <p className="side-nav-link">Notifications</p>
          <p className="side-nav-link">Following</p>
        </div>
        <div class="js-menu-screen sliding-panel-fade-screen"></div>
      </div>
    );
  }
});
