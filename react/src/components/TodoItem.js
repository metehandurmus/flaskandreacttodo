function TodoItem(props) {
    
    const onClick = () => {
        props.onDelete(props.id)
    }
    
    return(
        <div className="border p-3 rounded-3 mb-3">
            <div className="row align-items-center">
                <div className="col">
                    {props.title}
                </div>
                <div className="col-auto">
                    <button onClick={onClick} className="btn btn-outline-danger px-4 btn-sm">Sil</button>
                </div>
            </div>
        </div>
    )
}

export default TodoItem