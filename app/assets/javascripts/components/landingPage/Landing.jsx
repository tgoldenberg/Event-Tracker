var Landing = React.createClass({
  render: function() {
    return (
      <div className="landing">
        <div className="container-fluid">
          <LandingHero />
          <LoginSidebar />
        </div>
      </div>
    );
  }
});
