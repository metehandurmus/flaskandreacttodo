import React from "react";

class AddInput extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
        }
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({
            title: ''
        })
    }

    onChange = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} className="mb-4">
                <input onChange={this.onChange} value={this.state.title} type="text" className="form-control" placeholder="Blabla" />
            </form>
        )
    }
}

export default AddInput