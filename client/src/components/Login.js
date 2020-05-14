import React from 'react'
import { Container, Grid, Typography, Button } from '@material-ui/core'


export default class Login extends React.Component {
    handleLogin = () => {
        this.props.auth.login()
    }

    render() {
        return (
            <React.Fragment>
                <Container>
                    <Grid style={{ height: '100vh' }} container justify="center" alignItems="center" direction="row">
                        <Grid item md={6}>
                            <img style={{ width: '100%' }} src={require('../assets/5242.jpg')} />
                        </Grid>
                        <Grid item md={6}>
                            <Typography variant="h4">
                                Welcome to digital gallery!<br></br>
                                Login to continue
                            </Typography>
                            <Button onClick={this.handleLogin} variant="contained" style={{ backgroundColor: '#fa9746', color: 'white' }}>Login</Button>
                        </Grid>
                    </Grid>
                </Container>
            </React.Fragment>
        )
    }
}
