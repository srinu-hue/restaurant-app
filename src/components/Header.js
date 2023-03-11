import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, IconButton  } from '@material-ui/core';
import { Link } from 'react-router-dom';
import MenuIcon from "@material-ui/icons/Menu";
import { Button } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import OtherHousesIcon from '@mui/icons-material/OtherHouses';
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
    <AppBar className={classes.appBar} position='static'>
      <Toolbar className={classes.toolbar}>
        <Link to='/'>
            <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          className="focus:outline-none"
        >
        <OtherHousesIcon color='primary' />
        </IconButton>
        </Link>
        <div>
        <Link to='/cart'>
            <IconButton>
                <ShoppingCartOutlinedIcon />
            </IconButton>
          </Link>
          
        <Link to='/login'>
        <Button variant="contained">Login</Button>
        </Link>

        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
