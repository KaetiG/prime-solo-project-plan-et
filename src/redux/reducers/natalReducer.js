const natalReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_NATAL':
            return action.payload;
        default:
            return state;
    }
}