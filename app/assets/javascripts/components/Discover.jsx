var Discover = React.createClass({
  handleNewEvent: function(event) {
    this.props.handleNewEvent(event);
  },
  handleCheckboxChange: function(target) {
    this.props.handleCheckboxChange(target);
  },

  componentDidMount: function() {
      $("#datepicker").datepicker({inline: true,
                showOtherMonths: true,
                dayNamesMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],});
  },
  render: function() {

    return (
      <div className="discover">
        <MyFolders />
        <div className="hero-box col-sm-9">
          <br/>
          <div className="well hero-panel">
            <h1>MyTracks</h1>
            <div className="search-tools">
              <div className="filters">
                <Checkbox handleChange={this.handleCheckboxChange} checkbox={this.props.checkbox} checkboxSummary={this.props.checkboxSummary}/>
                <div>
                  <label>Date</label>
                  <div>
                    <input type="text" placeholder="date" className="form-control calendar" id="datepicker"/>
                  </div>
                </div>
                <div>
                  <label>Location</label>
                    <div>
                      <input className="controls form-control" type="text" placeholder="location" id="pac-input" name="place_id"/>
                      <img src="https://raw.githubusercontent.com/tgoldenberg/EatMe-DrinkMe/master/app/assets/images/powered-by-google-on-white.png" alt='powered by google'/>
                      <input type="hidden" id="place_id" />
                    </div>
                </div>
                <div className="filter trigger">
                  <button>Search Events</button>
                </div>
              </div>
            </div>
            <Icons />
          </div>
          <EventTable events={this.props.events} user={this.props.user} handleNewEvent={this.handleNewEvent} userEvents={this.props.userEvents} />
        </div>

      </div>
    );
  }
});
