import React from 'react'

import TodoItem from '../TodoItem/TodoItem';

export default function TodoList({ todos, removeTodo, toggleComplete }) {

  return (
	  <ul>
		  {
			  todos.map(todo =>

				  <TodoItem key={todo.id}  {...todo} removeTodo={removeTodo} toggleComplete={toggleComplete } />
				)
		  }
	</ul>
  )
}
