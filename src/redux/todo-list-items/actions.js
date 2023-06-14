import {todoTypes} from './index'

const requestGetTodoActionCreator = () => ({
    type: todoTypes.GET_TODO_ITEM_REQUEST
})

const receiveGetTodoActionCreator = (data) => ({
    type: todoTypes.GET_TODO_ITEM_RECEIVE,
    payload: data
})

const failureGetTodoActionCreator = (error) => ({
    type: todoTypes.GET_TODO_ITEM_FAILURE,
    payload: error
})


const requestDeleteTodoActionCreator = () => ({
    type: todoTypes.DELETE_TODO_ITEM_REQUEST
})

const receiveDeleteTodoActionCreator = (data) => ({
    type: todoTypes.DELETE_TODO_ITEM_RECEIVE,
    payload: data
})

const failureDeleteTodoActionCreator = (error) => ({
    type: todoTypes.DELETE_TODO_ITEM_FAILURE,
    payload: error
})


const requestEditTodoActionCreator = () => ({
    type: todoTypes.EDIT_TODO_ITEM_REQUEST
})

const receiveEditTodoActionCreator = (data) => ({
    type: todoTypes.EDIT_TODO_ITEM_RECEIVE,
    payload: data
})

const failureEditTodoActionCreator = (error) => ({
    type: todoTypes.EDIT_TODO_ITEM_FAILURE,
    payload: error
})

export default {
    requestGetTodoActionCreator,
    receiveGetTodoActionCreator,
    failureGetTodoActionCreator,

    requestDeleteTodoActionCreator,
    receiveDeleteTodoActionCreator,
    failureDeleteTodoActionCreator,

    requestEditTodoActionCreator,
    receiveEditTodoActionCreator,
    failureEditTodoActionCreator
}