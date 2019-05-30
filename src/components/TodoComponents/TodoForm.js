import React from 'react'
import { tsPropertySignature } from '@babel/types';

function TodoForm(props) {
    return (
        <form className='form' onSubmit={e => props.addTask(e)}>
            <input 
                type='text' 
                name='taskInput' 
                placeholder='New Task'
                value={props.taskInput}
                onChange={e => props.changeHandler(e)}
            />
            <button>Add New</button>
            <button>Clear Complete</button>
        </form>
    );
}

export default TodoForm;