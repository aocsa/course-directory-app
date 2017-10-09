import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css'; 

import {
  BrowserRouter,
  Route,
  Switch,
  NavLink,
  NavNavLink,
  Redirect
} from 'react-router-dom'

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)
 
const Teachers = (props) => {
   return (
      <div> <h2> Teachers </h2> </div>
   );
}
const HTML =  () => {
   return (
      <div> <h2> HTML </h2> </div>
   );
}
const CSS =  () => {
   return (
      <div> <h2> CSS </h2> </div>
   );
}
const JavaScript =  () => {
   return (
      <div> <h2> JavaScript </h2> </div>
   );
}

const Courses = () => {
   return (
      <div>
          <h2> Courses </h2> 
          <ul> 
             <li>  <NavLink exact to="/courses/html"> HTML </NavLink> </li>
             <li>  <NavLink to="/courses/css"> CSS </NavLink> </li>
             <li>  <NavLink to="/courses/javascript"> JavaScript </NavLink> </li>            
          </ul>

          <Switch> 
            <Route exact path= "/courses" 
                   render={()=><Redirect to="/courses/html" /> } />

            <Route path = "/courses/html" component = {HTML}/>
            <Route path = "/courses/css" component = {CSS}/>
            <Route path = "/courses/javascript" component = {JavaScript}/>
          </Switch>
      </div>
   );   
}

const NotFoundPage = (props) => {
   return (
      <div> <h2> Error 404! </h2> </div>
   );
}

const App = () => (
  <BrowserRouter>
    <div>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li> 
        <li><NavLink to="/teachers">Teachers</NavLink></li> 
        <li><NavLink to="/courses">Courses</NavLink></li> 
                
      </ul>

      <hr/>
      <Switch>
         <Route exact path="/" component={Home}/>
         <Route path="/about" component={About}/> 
         <Route path="/teachers" component={Teachers}/> 
         <Route path="/courses" component={Courses}/> 
         
         <Route component={NotFoundPage}/>
      </Switch>
    </div>
  </BrowserRouter>
)


export default App;
