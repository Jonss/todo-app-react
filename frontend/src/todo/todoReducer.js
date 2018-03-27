const INITIAL_VALUE = { 
    description: '',
    list: []
}

export const todoReducer = (state = INITIAL_VALUE, action) => {
    switch(action.type) {
        case 'DESCRIPTION_CHANGED':
            return { ...state, description: action.payload }
        case 'TODO_SEARCHED':
            return { ...state, list: action.payload.data }
        case 'TODO_REDUCER': {
            return { ...state, description: ''}
        }
        default:
            return state;
    }
}