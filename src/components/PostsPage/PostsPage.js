import React, { Component } from 'react';
import { connect } from 'react-redux';

class PostsPage extends Component {
    render() {
        return (
            <></>
        )
    }
}

// Instead of taking everything from state, we just want the user info.
// if you wanted you could write this code like this:
// const mapStateToProps = ({user}) => ({ user });
const mapStateToProps = state => ({
    user: state.user,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(PostsPage);

//    <div>
//     <h1 id="welcome">
//       Welcome, { props.user.username }!
//     </h1>
//     <p>Your ID is: {props.user.id}</p>
//     <LogOutButton className="log-in" />
//    </div>