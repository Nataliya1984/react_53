import React from 'react';
import jss from 'jss';
import preset from 'jss-preset-default';
import styles from './styles';
import Task from './Task';

jss.setup(preset());
const { classes } = jss.createStyleSheet(styles).attach();

function Column() {
  return (
    <div className={classes.column}>
      <Task />
    </div>
  );
}

export default Column;
