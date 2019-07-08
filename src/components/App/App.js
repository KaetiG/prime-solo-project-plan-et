import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import { connect } from 'react-redux';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'

import ProfilePage from '../ProfilePage/ProfilePage';
import HomePage from '../HomePage/HomePage';
import MoonPage from '../MoonPage/MoonPage';
import PlanetsPage from '../PlanetsPage/PlanetsPage';
import SignsPage from '../SignsPage/SignsPage';
import PostsPage from '../PostsPage/PostsPage';
import EditPage from '../EditPage/EditPage';

import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_USER' })
  }

  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
            <Redirect exact from="/" to="/home" />
            {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/home will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the 'Login' or 'Register' page.
            Even though it seems like they are different pages, the user is always on localhost:3000/home */}
            <ProtectedRoute
              exact
              path="/home"
              component={HomePage}
            />
            {/* This works the same as the other protected route, except that if the user is logged in,
            they will see the info page instead. */}
            <ProtectedRoute
              exact
              path="/profile"
              component={ProfilePage}
            />
            <ProtectedRoute
              exact
              path="/moon"
              component={MoonPage}
            />
            <ProtectedRoute
              exact
              path="/planets"
              component={PlanetsPage}
            />
            <ProtectedRoute
              exact
              path="/signs"
              component={SignsPage}
            />
            <ProtectedRoute
              exact
              path="/posts"
              component={PostsPage}
            />
            <ProtectedRoute
              exact
              path="/edit"
              component={EditPage}
            />
            {/* If none of the other routes matched, we will show a 404. */}
            <Route render={() => <h1>404</h1>} />
          </Switch>
          <Footer />
        </div>
      </Router>
    )
  }
}

export default connect()(App);
