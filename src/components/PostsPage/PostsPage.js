import React, { Component } from 'react';
import { connect } from 'react-redux';

class PostsPage extends Component {
    state = {
        entry: '',
    }
    componentDidMount(){
        this.props.dispatch({ type: "GET_POST_HISTORY", payload: this.props.user.id  });
      }
    handleInputEntry = (event) => {
        this.setState({
            entry: event.target.value
        })
        console.log(event.target.value)
    }

    handlePost = () =>{
        //const payload = [this.props.user.id, this.state.entry]
        this.props.dispatch({ type: 'POST_ENTRY', payload: {id: this.props.user.id, ...this.state} })
        console.log(this.props.user.id, this.state.entry);
    }

    handleDelete = (event) => {
        this.props.dispatch({ type: "DELETE_POST", payload: {user: this.props.user.id, id: event.target.value} });
        console.log('delete clicked', event.target.value)
    }
 
    render() {
        return (
            <>
            <div>
                <textarea type="text"
                    rows="8"
                    cols="55"
                    onChange={this.handleInputEntry}
                    value={this.state.entry}
                    key={'entry'}
                    placeholder='My goals for this week are...'>
                </textarea>
                <button onClick={this.handlePost}>Post</button>
            </div>
            <div>
                {this.props.postReducer.map((post) => <div key={post.id}>
                            <p>{post.entry}<button onClick={this.handleDelete} value={post.id}>Delete</button></p></div>)}
                            {/* change how this displays */}
            </div>
            </>
        )
    }
}

// Instead of taking everything from state, we just want the user info.
// if you wanted you could write this code like this:
// const mapStateToProps = ({user}) => ({ user });
  const mapStateToProps = state => ({
    user: state.user,
    postReducer: state.postReducer,
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