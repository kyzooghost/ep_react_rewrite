import React from 'react';
import { HashRouter as Router, Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Home, Podcast, Covidsations, Blog, BlogPage } from './pages/index';

function App() {
    return (
    <Router basename='/'>
      <Switch>
        <Route exact path ="/podcast">
          < Podcast />
        </Route>
        <Route exact path ="/blog">
          <Blog />
        </Route>
        <Route path ="/blog/:blogId">
          <BlogPage />
        </Route>
        <Route exact path ="/covidsations">
          < Covidsations />
        </Route>
        <Route exact path ="/">
          < Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
