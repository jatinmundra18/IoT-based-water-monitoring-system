import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../Components/Home';
import Floor1 from '../Components/Signup';

const Main = () => {
  return (
    <Switch> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' component={Home}></Route>
      
    </Switch>
  );
}