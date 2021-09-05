import React from 'react';
import jss from 'jss';
import preset from 'jss-preset-default';
import styles from './styles';
import Column from './Column';
import Task from './Task';

jss.setup(preset());
const { classes } = jss.createStyleSheet(styles).attach();

function Wrapp() {
  return (
    <div className={classes.wrapp}>
      <Column taska={<Task />} />
      <Column taska={<Task />} />
      <Column />
      <Column />
    </div>
  );
}

export default Wrapp;
