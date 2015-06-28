var Calendar = React.createClass({
  componentDidMount: function() {
    var calendar = $('#calendar').fullCalendar({
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
      eventSources: [{
        url: '/events'
      }],
      timeFormat: 'h:mm'
    });
  },
  render: function() {
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
