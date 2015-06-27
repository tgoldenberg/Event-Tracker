var LoginSidebar = React.createClass({
  render: function() {
    return (
      <div className="col-md-4">
        <ul className="bullets">
          <li className="bullet">
            <div className="bullet-icon bullet-icon-1">
              <img src="https://raw.githubusercontent.com/thoughtbot/refills/master/source/images/placeholder_logo_2.png" alt=""/>
            </div>
            <div className="bullet-content">
              <h2>Sign In</h2>
              <form action="/sessions/login" method="post" id="new_user_registration">
                <input type="text" name="user[username]" placeholder="Username" className="form-control"/><br/>
                <input type="password" name="user[password]" placeholder="Password" className="form-control"/><br/>
                <input type="submit" name="commit" className="submit-button" value="Login"/>
              </form>
              <a href="/users/new">Signup</a>
            </div>
          </li>
        </ul>
        <ul className="bullets">
          <li className="bullet">
            <div className="bullet-icon bullet-icon-1">
              <img src="https://raw.githubusercontent.com/thoughtbot/refills/master/source/images/placeholder_logo_2.png
        " alt=""/>
            </div>
            <div className="bullet-content">
              <h2>About Sotracks</h2>
              <p>Lorem dolor sit amet consectetur adipisicing elit. Doloremque, minus, blanditiis, voluptatibus nulla quia ipsam sequi quos iusto aliquam iste magnam accusamus molestias quo illum impedit. Odit officia autem.</p>
              <p>Lorem dolor sit amet consectetur adipisicing elit. Doloremque, minus, blanditiis, voluptatibus nulla quia ipsam sequi quos iusto aliquam iste magnam accusamus molestias quo illum impedit. Odit officia autem.</p>
              <p>Lorem dolor sit amet consectetur adipisicing elit. Doloremque, minus, blanditiis, voluptatibus nulla quia ipsam sequi quos iusto aliquam iste magnam accusamus molestias quo illum impedit. Odit officia autem.</p>
            </div>
          </li>
        </ul>
      </div>
    );
  }
});
