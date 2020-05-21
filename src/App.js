import React from 'react';
import Home from './pages/Home'
import Rooms from './pages/Rooms'
import SingleRoom from './pages/SingleRoom'
import Error from './pages/Error'
import './App.css';
import {Route ,Switch } from 'react-router-dom'
import Navbar  from './component/Navbar' 
function App() {
  return (
    <>
    <Switch>
    
    <Route exact path='/' component={Home}/>
    <Route exact path='/rooms/:slug' component={SingleRoom}/>
    <Route exact path='/rooms' component={Rooms}/>
    {/* <Error/> */}
    <Route component={Error}/>
    </Switch>
    <Navbar/>
    </>
  );
}

export default App;
