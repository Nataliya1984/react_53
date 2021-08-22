import React from 'react';
import jss from 'jss';
import preset from 'jss-preset-default';
import styles from './styles';

jss.setup(preset());
const { classes } = jss.createStyleSheet(styles).attach();

function Task() {
  return (
    <div className={classes.task}>
      <div className={classes.wrapper}>
        <div className={classes.name}></div>
        <div className={classes.img}></div>
      </div>
      <div className={classes.input}></div>
      <div className={classes.input}></div>
      <div className={classes.input}></div>
    </div>
  );
}

export default Task;
