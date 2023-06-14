import {todoTypes} from './index'

const initialState = {
    loading: false,
    todos: [],
    error: null
}

export default function todoReducer(state = initialState, action) {
    switch (action.type) {

        // Обработка получения тудушек
        case todoTypes.GET_TODO_ITEM_REQUEST:
            return {
                ...state,
                loading: true
            }
        case todoTypes.GET_TODO_ITEM_RECEIVE:
            return {
                ...state,
                loading: false,
                todos: [...state.todos, action.payload]
            }
        case todoTypes.GET_TODO_ITEM_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        // Обработка удаления тудушек
        case todoTypes.DELETE_TODO_ITEM_REQUEST:
            return {
                ...state,
                loading: true
            }
        case todoTypes.DELETE_TODO_ITEM_RECEIVE:
            return {
                ...state,
                loading: false,
                todos: [...state.todos, action.payload]
            }
        case todoTypes.DELETE_TODO_ITEM_FAILURE:
            return {
                ...state,
               loading: false,
                error: action.payload
            }

        // Обработка редактирования тудушек
        case todoTypes.EDIT_TODO_ITEM_REQUEST:
            return {
                ...state,
                loading: true
            }

        case todoTypes.EDIT_TODO_ITEM_RECEIVE:
            return {
                ...state,
                loading: false,
                todos: [...state.todos, action.payload]
            }
        case todoTypes.EDIT_TODO_ITEM_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

            // Если кейсы не попадают ни под один редьюсер, возвращаем стэйт
        default:
            return state
    }
}