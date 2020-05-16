import React from 'react'
import Navbar from './AppBar'
import { Container, Grid, TextField, Button, Typography, CircularProgress } from '@material-ui/core'
import { createCatalogue } from '../api/catalogues-api'

export default class CreateCatalogue extends React.Component {
    state = {
      name: null,
      description: null,
      submitLoading: false
    }

    componentDidMount() {
        console.log('Inside Create', this.props.auth.getIdToken())
    }

    handleNameChange = (e) => {
      this.setState({
        name: e.target.value
      })
    }

    handleDescriptionChange = (e) => {
      this.setState({
        description: e.target.value
      })
    }
    
    submit = async () => {
      this.setState({
        submitLoading: true
      })
      const token = this.props.auth.getIdToken()
      const newCatalogue = {
          name: this.state.name,
          description: this.state.description
      }
      await createCatalogue(token, newCatalogue)
      this.props.history.push(`/`)
      console.log('state', this.state)
    }
    
    render() {
        return (
            <React.Fragment>
              <Navbar logout={this.props.auth.logout} />
              <Container>
                <Grid container justify="center" alignItems="flex-start" direction="column">
                  <Grid item xs={12}>
                    <Typography variant="h3" gutterBottom>
                      Create Catalogue
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField id="Name" label="Name" onChange={this.handleNameChange} />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField id="Description" label="Description" onChange={this.handleDescriptionChange} />
                  </Grid>
                  <Grid item xs={6}>
                    <Button variant="contained" color="primary" onClick={this.submit}>Submit</Button>
                    {this.renderLoading()}
                  </Grid> 
                </Grid>
              </Container>
            </React.Fragment>
        )
    }

    renderLoading() {
        console.log('loading')
        if (this.state.submitLoading) {
          return (
            <CircularProgress color="secondary" />
        )
      }
    }
    l
}