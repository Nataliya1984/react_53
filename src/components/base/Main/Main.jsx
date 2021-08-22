import React from 'react';
import jss from 'jss';
import preset from 'jss-preset-default';
import styles from './styles';
import Wrapp from './Wrapp';

jss.setup(preset());
const { classes } = jss.createStyleSheet(styles).attach();

function Main() {
  return (
    <div className={classes.main}>
      Main
      <Wrapp />
    </div>
  );
}

export default Main;
