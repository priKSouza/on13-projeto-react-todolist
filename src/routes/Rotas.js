import React from "react"

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home/Home'
import List from '../pages/ToDoList/ToDoList'

function Rotas() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/todolist" component={List} />
      </Switch>
    </BrowserRouter>
  );
}

export default Rotas;
