import React,{useState} from 'react';
import TodoForm from '../components/TodoForm'
const TodoList = () => {

	const [todos, setTodos] = useState([])
	
	function addTodo(todo) {
		const newTodos = [todo, ...todos];
		setTodos(newTodos);
		
	}
	return (
		<div>
			<TodoForm onSubmit={addTodo} />
		</div>
	);
};

export default TodoList;