import React from "react";
import Blogs from './../Pages/Blogs';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from "../Pages/Dashboard";

function App() {
  return <BrowserRouter>
    <Switch>
      <Route exact={true} path="/" component={Dashboard} />
      <Route path="/blogs" component={Blogs} />
    </Switch>
  </BrowserRouter>
}

export default App;
