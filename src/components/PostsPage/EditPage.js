import React, { Component } from 'react';
import { connect } from 'react-redux';

class EditPage extends Component {
    state = {
        entry: '',
    }
    handleSave = () => {
        this.props.dispatch({
            type: 'UPDATE_POST', payload: {...this.state,
                user: this.props.user.id, 
                id: this.props.singlePostReducer[0].id, 
                }
        });
        this.props.history.push('/posts');
    }

    handleEditChange = (event) => {
        this.setState({
            entry: event.target.value
        })
    }
    render() {
        return (
            <>
            <div class="container-fluid" className="postPageDiv">
                
                <div class="row">
                    <div class="col-sm-4"></div>
                    <br />
                    <br />
                    <textarea
                        class="col-sm-3"
                        type="text"
                        rows="5"
                        cols="25"
                    onChange={this.handleEditChange}
                    value={this.state.entry}
                    key={'entry'}
                    placeholder='My goals for this week are...'>
                </textarea></div>
                <div class="row">
                <div class="col-sm-4"></div>
                <button class="col-sm-1" className="saveButton" onClick={this.handleSave}>Save</button>
                
                <button class="col-sm-1" className="cancelButton" onClick={() => this.props.history.push('/posts')}>Cancel</button>
                </div>
                </div>
            </>
        )
    }
}

const mapStateToProps = state => ({
    user: state.user,
    singlePostReducer: state.singlePostReducer,
  });

export default connect(mapStateToProps)(EditPage);