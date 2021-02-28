import React from "react";
import Blogs from './../Pages/Blogs';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from "../Pages/Dashboard";
import Profile from "../Pages/Profile";
import PageNotFound from './../Pages/PageNotFound';
import Navbar from "./Navbar";
import Add from "../Pages/Add";
// import note from "./Note.jsx";
import {userProvider} from './userContext.js'
function App() {
  return <BrowserRouter>
    <Switch>
      <Route exact={true} path="/" render={()=>{
        return <div>
          <Navbar  brand={"GitFind"}/>
          <Dashboard />
        </div>
      }} />
      <Route exact={true} path="/add" render={()=>{
        return <div>
          <Navbar  brand={"GitFind"}/>
          <Add />
        </div>
      }} />
      <Route path="/blogs" component={Blogs} />
      <Route path="/profile/:id" component={Profile} />
      <Route path="**" component={PageNotFound} />
    </Switch>
  </BrowserRouter>
}

export default App;
