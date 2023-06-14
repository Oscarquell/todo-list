const ADD_TASK = 'ADD_TASK'
const DELETE_TASK = 'DELETE_TASK'
const COPY_TASK = 'COPY_TASK'

const initialState = {
    todos: [],
    count: 0
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK: {
            return {
                ...state,
                todos: [...state.todos, {
                    title: action.payload,
                    isDelete: false,
                    isImportant: false,
                    isDone: false,
                    id: Math.floor(Math.random() * 100000)
                }],
                count: state.count + 1
            }
        } case DELETE_TASK: {
            return {
                ...state,
                todos: [...state.todos.filter((item) => item.id !== action.id)],
                count: state.count - 1
            }
        } case COPY_TASK: {
            return {
                ...state,
                todos: [...state.todos, {
                    title: action.payload,
                    isDelete: false,
                    isImportant: false,
                    isDone: false,
                    id: Math.floor(Math.random() * 100000)
                }],
                count: state.count + 1
            }
        }
        default: return state
    }
}

export const addTask = (title) => {
    return (dispatch) => {
        return dispatch({type: ADD_TASK, payload: title})
    }
}

export const deleteTask = (id) => {
    return (dispatch) => {
        return dispatch({type: DELETE_TASK, id})
    }
}

export const copyTask = (title) => {
    return (dispatch) => {
        return dispatch({type: COPY_TASK, payload: title})
    }
}


