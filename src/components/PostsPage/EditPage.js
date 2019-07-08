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
        console.log(this.props.singlePostReducer.id)
        this.props.history.push('/posts');
    }

    handleEditChange = (event) => {
        this.setState({
            entry: event.target.value
        })
        console.log(event.target.value)
    }
    render() {
        return (
            <>
                <textarea type="text"
                    rows="8"
                    cols="55"
                    onChange={this.handleEditChange}
                    value={this.state.entry}
                    key={'entry'}
                    placeholder='My goals for this week are...'>
                </textarea><br/>
                <button onClick={() => this.props.history.push('/posts')}>Cancel</button>
                <button onClick={this.handleSave}>Save</button>
                {/* <pre>
                    {JSON.stringify(this.props.singlePostReducer, null, 2)}
                </pre> */}
            </>
        )
    }
}

const mapStateToProps = state => ({
    user: state.user,
    singlePostReducer: state.singlePostReducer,
  });

export default connect(mapStateToProps)(EditPage);