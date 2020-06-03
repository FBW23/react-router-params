import React from 'react';
import '../scss/App.scss';
import { Route, Switch } from 'react-router-dom';
import PostList from './PostList';

function App() {
  
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={PostList}></Route>
      </Switch>
    </div>
  );
}

export default App;
