import React from 'react';
import './style.css'

const TodoList = () => {
    return (
        <div>
            <div className="todo-list-todos">
                <span className='todo-list-item'></span>
                <span className='todo-list-delete-icon'>
                    <i className='delete-icon' />
                </span>
            </div>
        </div>
    );
};

export default TodoList;