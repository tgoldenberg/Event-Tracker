var LandingHero = React.createClass({

  handleSearch: function(e) {
    e.preventDefault();
    this.props.handleSearch();
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

  handleNewDate: function(e) {
    var date = $(e.target).val();
    this.props.handleNewDate(date);
  },

  handleNewLocation: function(location) {
    this.props.handleNewLocation(location);

  },

  handleCheckboxChange: function(target) {
    this.props.handleCheckboxChange(target);
  },

  render: function() {
    return (
      <div className="hero-box col-sm-8">
          <br/>
          <div className="well hero-panel">
            <h1>Sotracks</h1>
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
          </div>
          <EventTable events={this.props.events} href="/users/new"/>
      </div>
    );
  }
});
