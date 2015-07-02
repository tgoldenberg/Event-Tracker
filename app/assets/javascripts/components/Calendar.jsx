var Calendar = React.createClass({
  componentDidMount: function() {
    var events = this.props.userEvents;
    var calendarEvents = events.map(function(event){
      return {title: event.name, start: event.startTime, end: event.endTime};
    });
    console.log(this.props.userEvents);
    var calendar = $('#calendar').fullCalendar({
      events: calendarEvents,
      theme: true,
      aspectRatio: 1.5,
      fixedWeekCount: false,
      header: {
        left: "prev, next today",
        center: "title",
        right: "month,agendaWeek,agendaDay"
      },
      selectable: true,
      selectHelper: true,
      editable: true,
      timeFormat: 'h:mm'
    });
  },
  render: function() {
    var events = this.props.userEvents;
    var calendarEvents = events.map(function(event){
      return {title: event.name, start: event.startTime, end: event.endTime};
    });
    console.log(this.props.userEvents);
    var calendar = $('#calendar').fullCalendar({
      events: calendarEvents,
      theme: true,
      aspectRatio: 1.5,
      fixedWeekCount: false,
      header: {
        left: "prev, next today",
        center: "title",
        right: "month,agendaWeek,agendaDay"
      },
      selectable: true,
      selectHelper: true,
      editable: true,
      timeFormat: 'h:mm'
    });
    return (
      <div className="map col-sm-11">
        <br/>
        <div className="well hero-panel">
          <Icons/>
        </div><br/>
        <div id="calendar"></div>
      </div>
    );
  }
});
