import React from 'react'

export default function TodoItem({ id, text,complete ,toggleComplete,removeTodo}) {
	return (
		<li>
			<input type="checkbox" checked={complete} onChange={() => toggleComplete(id)} />
			<span>{text}</span>
			<span className='delete' onClick={() => removeTodo(id)}>&times;</span>
		</li>
	)
}
