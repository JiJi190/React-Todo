// your components will all go in this `component` directory.
import React from 'react'
import Todo from "./Todo"

function TodoList(props) {
    return (
        <div>
            {props.tasks.map((task) => <Todo task={task}/>)}
        </div>
    )
}

export default TodoList