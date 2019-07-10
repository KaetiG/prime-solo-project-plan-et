import React, { Component } from 'react';
import { connect } from 'react-redux';

import { ReactComponent as PostIcon } from '../icons/post.svg';
import { ReactComponent as DeleteIcon } from '../icons/delete.svg';
import { ReactComponent as EditIcon } from '../icons/edit.svg';

class PostsPage extends Component {
    state = {
        entry: '',
    }
    componentDidMount() {
        this.props.dispatch({ type: "GET_POST_HISTORY", payload: this.props.user.id });
    }
    handleInputEntry = (event) => {
        this.setState({
            entry: event.target.value
        })
        console.log(event.target.value)
    }

    handlePost = () => {
        //const payload = [this.props.user.id, this.state.entry]
        this.props.dispatch({ type: 'POST_ENTRY', payload: { id: this.props.user.id, ...this.state } })
        console.log(this.props.user.id, this.state.entry);
    }

    handleDelete = (event) => {
        this.props.dispatch({ type: "DELETE_POST", payload: { user: this.props.user.id, id: event.target.value } });
        console.log('delete clicked', event.target.value)
    }

    handleEdit = (event) => {
        this.props.dispatch({ type: "GET_SINGLE_POST", payload: { id: event.target.value, user: this.props.user.id } })
        this.props.history.push('/edit')
    }

    render() {
        return (
            
            <div class="container-fluid" className="postPageDiv">
                <div class="row">
                    <textarea type="text"
                        rows="5"
                        cols="25"
                        onChange={this.handleInputEntry}
                        value={this.state.entry}
                        key={'entry'}
                        placeholder='My goals for this week are...'>
                    </textarea>
                    <button 
                    id="postButton" 
                    onClick={this.handlePost}>
                        <PostIcon height="25px" />
                        <br /> Post</button>
                </div>
                <div>
                    {this.props.postReducer.map((post) => <div class="row" key={post.id}>
                        <p>{post.date_posted.substring(5, 7) + "/" + post.date_posted.substring(8, 10) + "/" + post.date_posted.substring(0, 4)}
                            <br />{post.entry}</p><br />
                            <button
                                onClick={this.handleEdit}
                                value={post.id}
                                className="editButton">
                                <EditIcon height="25px" width="25px" />
                            </button>
                            <button
                                onClick={this.handleDelete}
                                value={post.id}
                                className="deleteButton">
                                <DeleteIcon height="25px" />
                            </button>
                        </div>)}
                    {/* change how this displays */}
                </div>
            </div>
            
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