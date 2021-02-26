import React from "react";
import Blogs from './../Pages/Blogs';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from "../Pages/Dashboard";
import Profile from "../Pages/Profile";
import PageNotFound from './../Pages/PageNotFound';
// import note from "./Note.jsx";

function App() {
  return <BrowserRouter>
    <Switch>
      <Route exact={true} path="/" component={Dashboard} />
      <Route path="/blogs" component={Blogs} />
      <Route path="/profile/:id" component={Profile} />
      <Route path="**" component={PageNotFound} />
    </Switch>
  </BrowserRouter>
}

export default App;
