import React,{useState} from 'react';

const TodoForm = (props) => {
	const [input, setInput] = useState('');

	const inputValue = e => {
		setInput(e.target.value)
	};

	const handleRefresh = e => {
		e.preventDefault();
		props.onSubmit({
			id: Math.floor(Math.random() * 100),
			value:input
		});  



		setInput('')
	};

	return (
		<div>
			<form className="form" onSubmit={handleRefresh}>
				<input type="text" value={input} onChange={inputValue} className="input-form" />
				<button className="btn">Add</button>
			</form>
		</div>
	);
};

export default TodoForm;