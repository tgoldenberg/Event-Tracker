var Calendar = React.createClass({
  componentDidMount: function() {
    if(this.isMounted()) {
      $('a[title]').tooltip();
      var tooltip = $('<div/>').qtip({
    		id: 'fullcalendar',
    		prerender: true,
    		content: {
    			text: ' ',
    			title: {
    				button: true
    			}
    		},
    		position: {
    			my: 'bottom center',
    			at: 'top center',
    			target: 'mouse',
    			viewport: $('#fullcalendar'),
    			adjust: {
    				mouse: false,
    				scroll: false
    			}
    		},
    		show: false,
    		hide: false,
    		style: 'qtip-light'
    	}).qtip('api');

      var events = this.props.userEvents;
      var calendarEvents = events.map(function(event){
        return {title: event.name, start: event.startTime, end: event.endTime};
      });
      $('#fullcalendar').fullCalendar({
        events: calendarEvents,
        theme: true,
        aspectRatio: 1.5,
        fixedWeekCount: false,
        header: {
          left: "prev, next today",
          center: "title",
          right: "month,agendaWeek,agendaDay"
        },
        eventClick: function(data, event, view) {
          var content = '<h3>' + data.title + '</h3>' +
                        '<p><b>Start:</b> ' + data.start + '<br/>' +
                        (data.end && '<p><b>End: </b> ' + data.end+ '</p>' || '');

          tooltip.set({
            'content.text': content
          })
          .reposition(event).show(event);
        },
        selectable: true,
        selectHelper: true,
        editable: true,
        timeFormat: 'h:mm'
      });
    }
  },

  render: function() {
    return (
      <div className="map col-sm-11">
        <br/>
        <div className="well hero-panel">
          <Icons/>
        </div><br/>
      <a href="#test" title="My tooltip text">Sample link</a>
      <div id="fullcalendar"></div>
      </div>
    );
  }
});
