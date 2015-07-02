var LandingHero = React.createClass({
  render: function() {
    return (
      <div className="hero-box col-sm-8">
          <br/>
          <div className="well hero-panel">
            <h1>Sotracks</h1>
            <div className="search-tools">
              <div className="filters">
                <div>
                  <label>Category</label>
                  <div>
                    <input type="text" placeholder="category" className="form-control calendar" id="datepicker"/>
                  </div>
                </div>
                <div>
                  <label>Date</label>
                  <div>
                    <input type="text" placeholder="date" className="form-control calendar" id="datepicker"/>
                  </div>
                </div>
                <div>
                  <label>Location</label>
                  <div>
                    <input type="text" placeholder="location" className="form-control calendar" id="datepicker"/>
                  </div>
                </div>
                <div className="filter trigger">
                  <button>Find Items</button>
                </div>
              </div>
            </div>
          </div>
          <EventTable events={this.props.events} href="/users/new"/>
      </div>
    );
  }
});
