import React from 'react';
import jss from 'jss';
import preset from 'jss-preset-default';
import styles from './styles';

jss.setup(preset());
const { classes } = jss.createStyleSheet(styles).attach();

function Side() {
  return (
    <div className={classes.side}>
      <div className={classes.side}>list_1</div>
    </div>
  );
}

export default Side;
