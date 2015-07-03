var Checkbox = React.createClass({

  toggleMenu: function() {
    $('.checkbox-list').toggleClass('hidden');
  },

  handleChange: function(e) {
    var target = $(e.target).attr('id');
    this.props.handleChange(target);
    e.stopPropagation();
  },

  render: function() {
    return (
      <div className="filter">
        <label>Category</label>
        <div className="hide-options" onClick={this.toggleMenu}>
          <label className="summary" data-role="summary">{this.props.checkboxSummary}</label>
          <button className="clear" type="button" >Clear</button>
        </div>
        <div id="checkbox-list" className="checkbox-list hidden">
          <ol>
            <li>
              <input id="Music" type="checkbox" checked={this.props.checkbox.Music} onChange={this.handleChange} />
              <label for="Music">Music</label>
            </li>
            <li>
              <input id="Comedy" type="checkbox" checked={this.props.checkbox.Comedy} onChange={this.handleChange}/>
              <label for="Comedy">Comedy</label>
            </li>
            <li>
              <input id="Sports" type="checkbox" checked={this.props.checkbox.Sports} onChange={this.handleChange}/>
              <label for="Sports">Sports</label>
            </li>
            <li>
              <input id="Tech"  type="checkbox" checked={this.props.checkbox.Tech} onChange={this.handleChange}/>
              <label for="Tech">Tech</label>
            </li>
            <li>
              <input id="Arts"  type="checkbox" checked={this.props.checkbox.Arts} onChange={this.handleChange}/>
              <label for="Arts">Arts</label>
            </li>
          </ol>
        </div>
      </div>
    );
  }
});
