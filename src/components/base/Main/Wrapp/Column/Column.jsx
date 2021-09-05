import React from 'react';
import jss from 'jss';
import preset from 'jss-preset-default';
import styles from './styles';

jss.setup(preset());
const { classes } = jss.createStyleSheet(styles).attach();

function Column(props) {
  return <div className={classes.column}>{props.taska}</div>;
}

export default Column;
