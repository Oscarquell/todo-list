const ADD_TASK = 'ADD_TASK'
const DELETE_TASK = 'DELETE_TASK'
const COPY_TASK = 'COPY_TASK'
const EDIT_TASK = 'EDIT_TASK'

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
                    id: Math.floor(Math.random() * 100000)
                }],
                count: state.count + 1
            }
        } case EDIT_TASK: {
            const { id, newTitle } = action.payload;
            return {
                ...state,
                todos: state.todos.map((item) =>
                    item.id === id ?  item : { ...item, title: newTitle, id: Math.floor(Math.random() * 100000)}
                )
            };
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

export const editTask = (id, newTitle) => {
    return (dispatch) => {
        return dispatch({type: EDIT_TASK, payload: { id, newTitle }})
    }
}

