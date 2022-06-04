import TodoItem from "./TodoItem";

function TodoItemPanel(props) {
    const items = props.todos.map(todo => {
        return(
            <div key={todo.id}>
                <TodoItem onDelete={props.onDelete} title={todo.title} id={todo.id} />
            </div>
        )
    }, this)
    return(
        <div>
            {items}
        </div>
    )
}

export default TodoItemPanel