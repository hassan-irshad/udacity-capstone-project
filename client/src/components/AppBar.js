import React from 'react'
import { Button, AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      textAlign: "left"
    },
    appBar: {
      backgroundColor: '#00acea'
    }
  }));
  
  export default function NavBar() {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <AppBar position="static" className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Photos Catalogue
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
  