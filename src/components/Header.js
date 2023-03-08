import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: 'rgba(255, 255, 255, 0.15)', // sets the background color with opacity
    backdropFilter: 'blur(10px)', // applies a blur effect to the background
    boxShadow: 'none',
    position: 'absolute',
    width: '100%',
    zIndex: '10', // ensures the appbar appears on top of other content
  },
  toolbar: {
    justifyContent: 'space-between',
  },
}));

function Header() {
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" className='blue-500'>Logo</Typography>
        <Typography variant="h6">Menu</Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
