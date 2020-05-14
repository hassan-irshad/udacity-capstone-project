import React from 'react'
import NavBar from './AppBar'
import { Typography, Grid, Container } from '@material-ui/core'
import CatalogueCard from './CatalogueCard'

class Home extends React.Component {

    componentDidMount() {
        console.log('this', this.props.auth)
    }

    render() {
        return (
            <React.Fragment>
                <NavBar logout={this.props.auth.logout}/>
                <Container>
                <Grid container justify="center" alignItems="center" direction="row" spacing={2}>
                    <Grid item xs={12}>
                        <Typography variant="h3" gutterBottom>
                            Welcome to your catalogues!
                        </Typography>
                    </Grid>
                    <Grid item sm={6} md={3} xs={12}>
                        <CatalogueCard />
                    </Grid>
                    <Grid item sm={6} md={3} xs={12}>
                      <CatalogueCard />
                    </Grid>
                    <Grid item sm={6} md={3} xs={12}>
                    <CatalogueCard />
                    </Grid>
                    <Grid item sm={6} md={3} xs={12}>
                    <CatalogueCard />
                    </Grid>
                    <Grid item sm={6} md={3} xs={12}>
                    <CatalogueCard />
                    </Grid>
                    <Grid item sm={6} md={3} xs={12}>
                    <CatalogueCard />
                    </Grid>
                    <Grid item sm={6} md={3} xs={12}>
                    <CatalogueCard />
                    </Grid>
                </Grid>
                </Container>
            </React.Fragment>
        )
    }
}

export default Home