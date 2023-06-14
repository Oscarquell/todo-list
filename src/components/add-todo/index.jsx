import React from 'react';
import './style.css'

const AddTodoItem = () => {
    return (
        <div className='add-todo-item'>
            <form className='add-todo-item-form'>
                <input
                    className='add-todo-item-input-field'
                    type="text"
                />
                <input
                    className='add-todo-item-input-btn'
                    type="button"
                    value='Add task'
                />
            </form>
        </div>
    );
};

export default AddTodoItem;