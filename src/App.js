import React, { useState, useEffect } from 'react';
import Posts from './components/Posts/Posts';
import Header from './components/Navbar/Navbar'
import { Redirect, Route, Switch } from "react-router-dom";
import CardForPost from './components/Card/Card';
import './App.scss'
import AddPost from './components/Posts/AddPost';

export const App = () => {
  return (<div className="app">
    <Header />
    <Switch>
      <Route exact path="/" render={() => <Posts />} />
      <Route path="/card/:id" render={() => <CardForPost />} />
      <Route path="/createPost" render={() => <AddPost />} />
      <Redirect to="/" />
    </Switch>
  </div>
  );
};