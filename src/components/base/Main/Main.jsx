import React from 'react';
import jss from 'jss';
import preset from 'jss-preset-default';
import { Switch, Route } from 'react-router-dom';
import styles from './styles';
import Wrapp from './Wrapp';
import Home from '../../Page/Home';
import Users from '../../Page/Users/Users';

jss.setup(preset());
const { classes } = jss.createStyleSheet(styles).attach();

function Main() {
  return (
    <div className={classes.main}>
      <Switch>
        <Route path="/wrapp">
          <Wrapp />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
      </Switch>
    </div>
  );
}

export default Main;
