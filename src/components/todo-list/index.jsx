import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {copyTask, deleteTask, editTask} from "../../redux/reducers/tasks";
import './style.css'

const TodoList = ({task, setTask, setChangeValue}) => {

    const [done, setDone] = useState(false)

    const dispatch = useDispatch()
    const todos = useSelector((store) => store.tasks.todos)

    const editTaskState = (title, id) => {
        setTask({ title: title, id: id})
        setChangeValue(true)
        console.log(task)
    };


    return (
        <div>
            {todos.map((item) => (
                <div
                    className="todo-list-todos"
                    key={item.id}
                >
                    <span className={done ? 'todo-list-item done-todo' : 'todo-list-item'}>
                        {item.title}</span>
                    <span
                        className='todo-list-buttons'
                        onClick={() => dispatch(deleteTask(item.id))}>
                            <i className='delete icon-btn' />
                        </span>
                    <span
                        className='todo-list-buttons'
                        id={item.id}
                        onClick={() => editTaskState(item.title, item.id)
                        }
                    >
                            <i className='edit icon-btn'/>
                        </span>
                    <span
                        className='todo-list-buttons'
                        onClick={() => dispatch(copyTask(item.title))}>
                            <i className='copy icon-btn' />
                        </span>
                    <span
                        className='todo-list-buttons'
                        onClick={() => setDone(true)}>
                            <i className='done icon-btn' />
                        </span>
                    <span
                      className='todo-list-buttons'
                      onClick={null}>
                            <i className='important icon-btn' />
                        </span>
                </div>
            ))

            }

        </div>
    );
};

export default TodoList;
