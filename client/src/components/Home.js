import React from 'react'
import NavBar from './AppBar'
import { Typography, Grid, Container, CircularProgress, Button } from '@material-ui/core'
import CatalogueCard from './CatalogueCard'
import { getCatalogues } from '../api/catalogues-api'
import { deleteCatalogue } from '../api/catalogues-api'


class Home extends React.Component {
    state = {
        catalogues: [],
        loadingCatalogues: true,
        loadingDelete: false
    }

    async componentDidMount() {
        await this.fetchCatalogues()
    }

    fetchCatalogues = async () => {
        try {
            const token = this.props.auth.getIdToken()
            const catalogues = await getCatalogues(token)
            this.setState({
                catalogues,
                loadingCatalogues: false
            })
        } catch(e) {
            alert(`Failed to fetch catalogues ${e.message}`)
        }
    }

    deleteCatalogue = async (catalogueId) => {
        const token = this.props.auth.getIdToken()
        await deleteCatalogue(catalogueId, token)
        await this.fetchCatalogues()
    }

    onEditButtonClick = (catalogueId) => {
        this.props.history.push(`/catalogue/${catalogueId}/edit`)
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
                    {this.renderCatalogues()}
                    
                </Grid>
                </Container>
            </React.Fragment>
        )
    }

    renderCatalogues() {
        if (this.state.loadingCatalogues) {
            return this.renderLoading()
        }

        return this.renderCatalogueList()
    }

    renderLoading() {
        return (
          <Grid>
            <CircularProgress color="secondary" />
          </Grid>
        )
      }

    renderCatalogueList() {
        return (
            this.state.catalogues.map((item) => {
                return (
                    <Grid  item sm={6} md={3} xs={12} key={item.catalogueId}>
                      <CatalogueCard item={item} remove={this.deleteCatalogue} edit={this.onEditButtonClick}/>
                    </Grid>
                )
            })
        )
    }
}

export default Home