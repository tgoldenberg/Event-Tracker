var Discover = React.createClass({
  handleNewEvent: function(event) {
    this.props.handleNewEvent(event);
  },
  handleCheckboxChange: function(target) {
    this.props.handleCheckboxChange(target);
  },

  handleSearch: function(e) {
    e.preventDefault();
    this.props.handleSearch();

  },

  handleNewLocation: function(location) {
    this.props.handleNewLocation(location);
  },

  handleNewDate: function(e) {
    var date = $(e.target).val();

    this.props.handleNewDate(date);
  },

  componentDidMount: function() {

    var func = this.handleNewLocation;

    $("#datepicker").datepicker({inline: true,
              showOtherMonths: true,
              dayNamesMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],});

    $('#datepicker').change(function(e) {
      this.handleNewDate(e);
    }.bind(this));

    initialize();

      var componentForm = {
        name: 'short_name',
        street_number: 'short_name',
        route: 'long_name',
        locality: 'long_name',
        administrative_area_level_1: 'short_name',
        postal_code: 'short_name'
      };

      var placeID = ""

      function initialize() {

        var input = /** @type {HTMLInputElement} */(
            document.getElementById('pac-input'));

        var autocomplete = new google.maps.places.Autocomplete(input);

        google.maps.event.addListener(autocomplete, 'place_changed', function() {
          var place = autocomplete.getPlace();
          document.getElementById("place_id").value = place.geometry.location;
          func(place.geometry.location);
        });
      };

  },
  render: function() {

    return (
      <div className="discover">
        <MyFolders />
        <div className="hero-box col-sm-10">
          <br/>
          <div className="well hero-panel">
            <h1>MyTracks</h1>
            <div className="search-tools">
              <div className="filters">
                <Checkbox handleChange={this.handleCheckboxChange} checkbox={this.props.checkbox} checkboxSummary={this.props.checkboxSummary}/>
                <div>
                  <label>Date</label>
                  <div>
                    <input type="text" placeholder="date" onChange={this.handleNewDate} className="form-control calendar" id="datepicker"/>
                  </div>
                </div>
                <div>
                  <label>Location</label>
                    <div>
                      <input className="controls form-control" type="text" placeholder="location" id="pac-input" name="place_id"/>
                      <img src="https://raw.githubusercontent.com/tgoldenberg/EatMe-DrinkMe/master/app/assets/images/powered-by-google-on-white.png" alt='powered by google'/>
                      <input type="hidden" id="place_id"/>
                    </div>
                </div>
                <div className="filter trigger">
                  <button onClick={this.handleSearch} >Search Events</button>
                </div>
              </div>
            </div>
            <Icons />
          </div>
          <EventTable
            events={this.props.events}
            user={this.props.user}
            handleNewEvent={this.handleNewEvent} 
            userEvents={this.props.userEvents} />
        </div>

      </div>
    );
  }
});
