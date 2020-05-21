import React from 'react'
import { Container, Button, Typography, CircularProgress } from '@material-ui/core'
import Navbar from './AppBar'
import { getUploadUrl, uploadFile } from '../api/catalogues-api'
import "../css/EditCatalogue.css"


export default class EditCatalogue extends React.Component {
    state = {
        file: undefined,
        uploading: false
    }


    componentDidMount() {
        console.log('id', this.props.match.params.catalogueId)
    }

    handleFileChange = (event) => {
        const files = event.target.files
        if (!files) return
    
        this.setState({
          file: files[0]
        })
    }

    handleSubmit = async (event) => {
        event.preventDefault()

        this.setState({
          uploading: true
        })
    
        try {
          if (!this.state.file) {
            alert('File should be selected')
            return
          }
    
          const uploadUrl = await getUploadUrl(this.props.auth.getIdToken(), this.props.match.params.catalogueId)
    
          await uploadFile(uploadUrl, this.state.file)
    
          alert('File was uploaded!')
          this.props.history.push(`/`)
        } catch (e) {
          alert('Could not upload a file: ' + e.message)
        } 
      }
    
    render() {
        return (
            <React.Fragment>
            <Navbar logout={this.props.auth.logout} />
            <Container maxWidth="xs">
            <div className="paper">
                <Typography variant="h3" gutterBottom>
                  Upload Catalogue Image
                </Typography>
                <form className="form">
                <input accept="image/*" id="icon-button-file" type="file" onChange={this.handleFileChange} />
                <Button variant="contained" color="primary" onClick={this.handleSubmit}>Submit</Button>
                </form>
                {this.renderLoading()}
            </div>
            </Container>
          </React.Fragment>
        )
    }

    renderLoading() {
      if (this.state.uploading) {
        return (
          <CircularProgress color="secondary" />
      )
    }
  }
}