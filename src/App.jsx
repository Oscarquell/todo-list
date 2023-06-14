import {useState} from "react";
import AddTodoItem from "./components/add-todo";
import TodoList from "./components/todo-list";
import './App.css';


function App() {

    const [task, setTask] = useState({
        title: '',
        id: null
    })
    const [changeValue, setChangeValue] = useState(false)

  return (
    <div className="App">
        <div className="head-title-wrap">
            <span className='head-line' />
            <span className='head-title'>To-do now</span>
            <span className='head-line' />
        </div>
        <div className="head-title-wrap underline-with-edit-icon">
            <span className="head-underline" />
            <i className='edit-logo' />
            <span className="head-underline" />
        </div>
        <AddTodoItem
            task={task}
            setTask={setTask}
            changeValue={changeValue}
            setChangeValue={setChangeValue}
        />
        <div className="long-underline" />
        <TodoList
            task={task}
            setTask={setTask}
            setChangeValue={setChangeValue}
        />
    </div>
  );
}

export default App;
