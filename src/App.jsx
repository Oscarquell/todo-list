import AddTodoItem from "./components/add-todo";
import TodoList from "./components/todo-list";
import './App.css';

function App() {
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
        <AddTodoItem />
        <div className="long-underline" />
        <TodoList />
    </div>
  );
}

export default App;
