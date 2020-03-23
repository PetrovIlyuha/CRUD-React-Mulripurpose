import React from 'react';
import './App.css';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../history';

import StreamList from './streams/StreamList/StreamList';
import StreamCreate from './streams/StreamCreate/StreamCreate';
import StreamShow from './streams/StreamShow';
import StreamDelete from './streams/StreamsDelete/StreamDelete';
import StreamEdit from './streams/StreamEdit/StreamEdit';
import Header from './Header';

export default function App() {
  return (
    <div>
      <Router history={history}>
        <Header />
        <Switch>
          <Route exact path="/" component={StreamList} />
          <Route exact path="/streams/new" component={StreamCreate} />
          <Route exact path="/streams/edit/:id" component={StreamEdit} />
          <Route exact path="/streams/delete/:id" component={StreamDelete} />
          <Route exact path="/streams/:id" component={StreamShow} />
        </Switch>
      </Router>
    </div>
  );
}
