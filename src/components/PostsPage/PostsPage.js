import React, { Component } from 'react';
import { connect } from 'react-redux';

import Swal from 'sweetalert2'

//import { ReactComponent as PostIcon } from '../icons/post.svg';
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

    }

    handlePost = () => {
        if (this.state.entry) {
            this.props.dispatch({ type: 'POST_ENTRY', payload: { id: this.props.user.id, ...this.state } })

            this.setState({
                entry: ''
            })
        } else {
            alert('Please type what you would like to be mindful of or what you would like to set as a goal')
        }
    }

    handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure you want to delete this?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#030303',
            cancelButtonColor: '#C33764',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.value === true) {
                this.props.dispatch({ type: "DELETE_POST", payload: { user: this.props.user.id, id: id } });
            }
        })
    }

    handleEdit = (id) => {
        this.props.dispatch({ type: "GET_SINGLE_POST", payload: { id: id, user: this.props.user.id } })
        this.props.history.push('/edit')
    }

    render() {
        return (

            <div class="container-fluid" className="postPageDiv">

                <div class="row">
                    <div class="col-sm-4"></div>
                    <br />
                    <br />
                    <textarea
                        class="col-sm-4"
                        type="text"
                        rows="5"
                        cols="25"
                        onChange={this.handleInputEntry}
                        value={this.state.entry}
                        key={'entry'}
                        placeholder='My goals for this week are...'>
                    </textarea>
                </div>
                <div class="row">
                    <div class="col-sm-4"></div>
                    <button
                        class="col-sm-4"
                        id="postButton"
                        onClick={this.handlePost}
                    >
                        Post</button>
                </div>
                <br />
                <div>
                    {this.props.postReducer.map((post) => <div class="row" className="postHistoryDiv" key={post.id}>
                        <div class="col-sm-4"></div>
                        <div class="col-sm-3">
                            <blockquote class="blockquote">
                                <footer class="blockquote-footer">{post.date_posted.substring(5, 7) + "/" + post.date_posted.substring(8, 10) + "/" + post.date_posted.substring(0, 4)}
                                </footer>
                                <p>{post.entry}</p></blockquote></div><br />
                        <div class="col-sm-1"><button
                            onClick={() => this.handleEdit(post.id)}
                            value={post.id}
                            className="editButton">
                            <EditIcon className="iconFill" height="25px" width="25px" />
                        </button>
                            <button
                                onClick={() => this.handleDelete(post.id)}
                                value={post.id}
                                className="deleteButton">
                                <DeleteIcon className="iconFill" height="25px" value={post.id} />
                            </button></div>
                    </div>)}
                </div>
            </div>

        )
    }
}

const mapStateToProps = state => ({
    user: state.user,
    postReducer: state.postReducer,
});

export default connect(mapStateToProps)(PostsPage);
