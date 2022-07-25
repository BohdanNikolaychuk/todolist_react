import React from 'react'

export default function InputTodo({text,setText,add}) {
	
  return (
	<label>
	<input className='input' type="text" value={text} onChange={(e) => setText(e.target.value)} />
	<button className='btn__add' onClick={add}>Add</button>
  </label>
  )
}
