var Landing = React.createClass({
  render: function() {
    return (
      <div className="landing">
        <LandingNav />
        <div className="container-fluid"><br/>
          <LandingHero />
          <LoginSidebar />
        </div>
      </div>
    );
  }
});
