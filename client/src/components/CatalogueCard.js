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

  export default function CatalogueCard({ item, remove }) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
          <CardActionArea>
            <CardHeader 
             title={item.name}
             subheader={new Date(item.createdAt).toDateString()}
            />
            <CardMedia 
             className={classes.media}
             image={require('../assets/multimedia.png')}
            />
            <CardContent>
             <Typography variant="body2" color="textSecondary" component="p">
               {item.description}
             </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions className={classes.buttons}>
            <Button size="small" color="primary" onClick={() => {remove(item.catalogueId)}}>
                Delete
            </Button>
        </CardActions>
        </Card>
    )
  }