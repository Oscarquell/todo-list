import React from 'react';
import {useDispatch} from "react-redux";
import {addTask, editTask} from "../../redux/reducers/tasks";
import './style.css'

const AddTodoItem = ({task, setTask, changeValue,setChangeValue}) => {

    const dispatch = useDispatch()

    const handleSubmit = (event) => {
        event.preventDefault()
        setTask({
            title: '',
            id: null
        })
    }

    return (
        <div className='add-todo-item'>
            <form
                className='add-todo-item-form'
                onSubmit={handleSubmit}
            >
                <input
                    value={task.title}
                    className='add-todo-item-input-field'
                    type="text"
                    placeholder='Write a task'
                    name='task'
                    onChange={(event) => setTask({
                        title: event.target.value,
                        id: null
                    })}
                />
                {   changeValue ?
                        <input
                            className='add-todo-item-input-btn'
                            type="submit"
                            value='Save'
                            onClick={() => {
                                dispatch(editTask(task.id, task.title))
                                setChangeValue(false)
                            }}
                        />
                    :
                         <input
                             className='add-todo-item-input-btn'
                             type="submit"
                             value='Add task'
                             onClick={task.title ? () => dispatch(addTask(task.title)) : null}
                         />
                }
            </form>
        </div>
    );
};

export default AddTodoItem;

