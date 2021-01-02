import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { makeStyles, CssBaseline } from '@material-ui/core';

import NavBar from './components/NavBar';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';

const useStyle = makeStyles(() => ({
  root: {
    minHeight: '100vh',
    background: '#e0e0e0',
    width: '100%',
    overflowY: 'auto',
    display: 'flex',
  },
}));

const App = () => {
  const classes = useStyle();

  return (
    <Router>
      <div className={classes.root}>
        <CssBaseline />
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          {/* <Route path="/wallpaper" component={Background} /> */}
        </Switch>
      </div>
    </Router>
  );
};

export default App;
