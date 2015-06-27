var Route = ReactRouter.Route,
  DefaultRoute = ReactRouter.DefaultRoute;

this.MyRoutes = (
  <Route handler={App}>
    <DefaultRoute handler={Discover} />
    <Route handler={Calendar} path="calendar" />
    <Route handler={Map} path="map" />
  </Route>
);
