const initialState = {
    regex: null
};

export function editorReducer(state = initialState, action) {
    switch (action.type) {
        case 'CHANGE':
            console.log('regex was changed');
            return state;
        default:
            return state;
    }
}