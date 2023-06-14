import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addTask} from "../../redux/reducers/tasks";
import './style.css'

const AddTodoItem = () => {

    const [task, setTask] = useState('')
    const dispatch = useDispatch()

    const handleSubmit = (event) => {
        event.preventDefault()
        setTask('')
        console.log(task)
    }

    return (
        <div className='add-todo-item'>
            <form
                className='add-todo-item-form'
                onSubmit={handleSubmit}
            >
                <input
                    value={task}
                    className='add-todo-item-input-field'
                    type="text"
                    placeholder='Write a task'
                    name='task'
                    onChange={(event) => setTask(event.target.value)}
                />
                <input
                    className='add-todo-item-input-btn'
                    type="submit"
                    value='Add task'
                    onClick={() => dispatch(addTask(task))}
                />
            </form>
        </div>
    );
};

export default AddTodoItem;