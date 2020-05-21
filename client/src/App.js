import React from 'react';
import { Route, Switch, Router } from 'react-router-dom'
import './App.css';
import Home from './components/Home'
import Login from './components/Login'
import CreateCatalogue from './components/CreateCatalogue'
import EditCatalogue from './components/EditCatalogue'

export default class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Router history={this.props.history}>
          {this.generateCurrentPage()}
        </Router>
      </div>
    )
  }

  generateCurrentPage() {
    if (!this.props.auth.isAuthenticated()) {
      return <Login auth={this.props.auth} />
    }

    return (
      <Switch>
        <Route
          path="/"
          exact
          render={props => {
            return <Home {...props} auth={this.props.auth} />
          }}
        />

        <Route
          path="/createCatalogue"
          exact
          render={props => {
            return <CreateCatalogue {...props} auth={this.props.auth} />
          }}
        />

        <Route
          path="/catalogue/:catalogueId/edit"
          exact
          render={props => {
            return <EditCatalogue {...props} auth={this.props.auth} />
          }}
        />
      </Switch>
    )
  }
}
