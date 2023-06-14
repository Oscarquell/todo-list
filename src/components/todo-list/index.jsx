import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {copyTask, deleteTask} from "../../redux/reducers/tasks";
import './style.css'

const TodoList = () => {

    const dispatch = useDispatch()
    const todos = useSelector((store) => store.tasks.todos)

    return (
        <div>
            {todos.map((item) => (
                <div
                    className="todo-list-todos"
                    key={item.id}
                >
                    <span className='todo-list-item'>{item.title}</span>
                    <span
                        className='todo-list-buttons'
                        onClick={() => dispatch(deleteTask(item.id))}>
                            <i className='delete icon-btn' />
                        </span>
                    <span
                        className='todo-list-buttons'
                        onClick={console.log('edit')}
                        >
                            <i className='edit icon-btn'/>
                        </span>
                    <span
                        className='todo-list-buttons'
                        onClick={() => dispatch(copyTask(item.title))}>
                            <i className='copy icon-btn' />
                        </span>
                </div>
            ))

            }

        </div>
    );
};

export default TodoList;