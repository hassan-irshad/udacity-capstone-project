import React from 'react'
import { CardActions, Button, Card, CardMedia, CardContent, makeStyles, CardHeader, Typography, CardActionArea } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 'inhertit',
    },
    media: {
      height: 0,
      paddingTop: '56.25%',
      backgroundSize: 'unset'
    },
    buttons: {
        justifyContent: 'center'
    }
  }));

  export default function CatalogueCard() {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
          <CardActionArea>
            <CardHeader 
             title="Photo"
             subheader="September 13, 2016"
            />
            <CardMedia 
             className={classes.media}
             image={require('../assets/multimedia.png')}
            />
            <CardContent>
             <Typography variant="body2" color="textSecondary" component="p">
               This impressive paella is a perfect party dish and a fun meal to cook together with your
               guests. Add 1 cup of frozen peas along with the mussels, if you like.
             </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions className={classes.buttons}>
            <Button size="small" color="primary">
                Delete
            </Button>
        </CardActions>
        </Card>
    )
  }