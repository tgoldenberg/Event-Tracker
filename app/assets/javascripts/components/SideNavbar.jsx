var SideNavbar = React.createClass({
  handleHover: function() {
    $('.sliding-panel-content, .sliding-panel-fade-screen').addClass('is-visible');
  },
  expandFolders: function(e) {
    e.preventDefault();
    $('.glyphicon-globe').toggleClass('move-down');
    $('.folder-list').toggleClass('hidden');
    return false;
  },
  renderAttending: function(e) {
    e.preventDefault();
    this.props.renderAttending();
    return false;
  },
  render: function() {
    console.log(this.props.userEvents);
    var attendingEvents = this.props.userEvents.map(function(event) {
      return <li>{event.title}</li>;
    });
    return (
      <div className="side-nav-holder" onMouseOver={this.handleHover}>
        <div className="side-navbar hidden-xs">
          <div className="glyph-holder">
            <Link to="/"><span className="glyphicon glyphicon-home"></span></Link>
            <span className="glyphicon glyphicon-folder-open"></span>
            <span className="glyphicon glyphicon-globe"></span>
            <span className="glyphicon glyphicon-user"></span>
          </div>
        </div>
        <div className="js-menu sliding-panel-content hidden-xs">
          <p className="home-side-nav side-nav-link"><Link to="/">Home</Link></p>
          <p className="side-nav-link"><a href="#" onClick={this.expandFolders}>Folders</a></p>
            <ol className="hidden folder-list">
              <li className="folder-title"><a href="#" className="folder-link">Suggested</a></li>
              <li className="folder-title"><a href="#" className="folder-link" onClick={this.props.handleSearch}>MyTracks</a></li>
              <li className="folder-title"><a href="#" className="folder-link" onClick={this.renderAttending}>Attending</a></li>
                <ol className="hidden">{attendingEvents}</ol>
            </ol>
          <p className="side-nav-link">Notifications</p>
          <p className="side-nav-link">Following</p>
        </div>
      </div>
    );
  }
});
