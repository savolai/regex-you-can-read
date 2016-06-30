const initialState = {
    active: false
};

export function debuggerReducer(state = initialState, action) {
    switch (action.type) {
        case 'TOGGLE_DEBUGGER':
            let active = state.active ? false : true;
            return Object.assign({}, state, { active });

        default:
            return state;
    }
}