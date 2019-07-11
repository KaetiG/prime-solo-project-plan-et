import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import { connect } from 'react-redux';

import Nav from '../Nav/Nav';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'

import HomePage from '../HomePage/HomePage';
import ProfilePage from '../ProfilePage/ProfilePage';
import MoonPage from '../MoonPage/MoonPage';
import PostsPage from '../PostsPage/PostsPage';

import EditPage from '../PostsPage/EditPage';
import SunPage from '../PlanetsPage/SunPage/SunPage';
import MercuryPage from '../PlanetsPage/MercuryPage/MercuryPage';
import VenusPage from '../PlanetsPage/VenusPage/VenusPage';
import MarsPage from '../PlanetsPage/MarsPage/MarsPage';
import JupiterPage from '../PlanetsPage/JupiterPage/JupiterPage';
import SaturnPage from '../PlanetsPage/SaturnPage/SaturnPage';
import NeptunePage from '../PlanetsPage/NeptunePage/NeptunePage';
import UranusPage from '../PlanetsPage/UranusPage/UranusPage';
import PlutoPage from '../PlanetsPage/PlutoPage/PlutoPage';

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
            <Redirect exact from="/planets" to="/planets/sun" />
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
            {/* possibly need to move these to a new component  */}
            <ProtectedRoute
              exact
              path="/planets/sun"
              component={SunPage}
            />
            <ProtectedRoute
              exact
              path="/planets/mercury"
              component={MercuryPage}
            />
            <ProtectedRoute
              exact
              path="/planets/venus"
              component={VenusPage}
            />
            <ProtectedRoute
              exact
              path="/planets/mars"
              component={MarsPage}
            />
            <ProtectedRoute
              exact
              path="/planets/jupiter"
              component={JupiterPage}
            />
            <ProtectedRoute
              exact
              path="/planets/saturn"
              component={SaturnPage}
            />
            <ProtectedRoute
              exact
              path="/planets/neptune"
              component={NeptunePage}
            />
            <ProtectedRoute
              exact
              path="/planets/uranus"
              component={UranusPage}
            />
            <ProtectedRoute
              exact
              path="/planets/pluto"
              component={PlutoPage}
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
        </div>
      </Router>
    )
  }
}

export default connect()(App);
