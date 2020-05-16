import React from 'react'
import { Button, AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core'
import { Link } from 'react-router-dom'

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
    //   backgroundColor: '#00acea'
    backgroundColor: '#fa9746'
    }
  }));
  
  export default function NavBar({ logout }) {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <AppBar position="static" className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Photos Catalogue
            </Typography>
            <Link to={'/createCatalogue'}><Button variant="contained" color="primary">Create</Button></Link>
            <Button onClick={logout} color="inherit">Logout</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
  