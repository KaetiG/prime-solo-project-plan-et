const singlePostReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_ONE_POST':
            return [ ...action.payload ];
        default:
            return state;
    }
}

export default singlePostReducer;