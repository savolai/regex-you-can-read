const initialState = {
    regex: '[a-z][0-9]'
};

export function editorReducer(state = initialState, action) {
    switch (action.type) {
        case 'CHANGE_REGEX':
            return Object.assign({}, state, {
                regex: action.regex
            });
        default:
            return state;
    }
}