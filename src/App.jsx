import React,
{
  useState
} from 'react';
import './App.css';
import {
  CSSTransition
} from 'react-transition-group';
import TodoList from './components/TodoList/TodoList';
import InputTodo from './components/InputTodo/InputTodo'

function App() {

  const [show, setShow] = useState(false);
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');
  const [isActive, setIsActive] = useState(false);
  const [color, setColor] = useState('');

  const add = () => {
    if (text.trim().length) {
      setTodos([
        ...todos,
        {
          id: Math.random(),
          text,
          complete: false
        }
      ])
      setText('');
    }


  }

  const removeTodo = (todoID) => {
    setTodos(todos.filter(todo => todo.id !== todoID))
  }

  const toggleComplete = (todoID) => {
    setTodos(
      todos.map(
        todo => {
          if (todo.id !== todoID) return todo
          return {
            ...todo,
            complete: !todo.complete
          }
        }
      )
    )
  }

  const showing = () => {
    setColor(Math.floor(Math.random() * 16777215).toString(16));
    setIsActive(!isActive);
    setShow(!show)
  }

  return (

    <div className="App"   style={{
      backgroundColor: isActive ? `#${color}` : '',
      color: isActive ? 'white' : '',
    }}
     >
      <button className='btn__show' onClick={showing}>{show
        ? 'End'
        : 'Start'} Show</button>

        <CSSTransition in={show} timeout={200} classNames="item" unmountOnExit>
        <div className="startShow">
          <InputTodo text={text} setText={setText} add={add} />
        
            <TodoList todos={todos}
              toggleComplete={toggleComplete}
              removeTodo={removeTodo} />

        </div>
        </CSSTransition>

    </div >
  );
}

export default App;
