import React from "react";
import AddInput from "./components/AddInput";
import TodoItemPanel from "./components/TodoItemPanel";
import "./css/App.css"
import axios from "axios";

class App extends React.Component {
  state = {
    todos: [],
  }

  url = "http://192.168.1.38:5000"

  componentDidMount() {
    this.getTodo()
  }

  getTodo = async () => {
    const response = await axios.get(this.url)
    this.setState({
      todos: response.data
    })
  }

  onDelete = (id) => {
    var that = this
    axios.post(`${this.url}/delete`, {
      id: id,
    })
    .then(function (response) {
      console.log(response)
      that.getTodo();
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  addTodo = (title) => {
    var that = this
    axios.post(`${this.url}/add`, {
      title: title,
    })
    .then(function (response) {
      console.log(response)
      that.getTodo();
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    return (
      <div>
        <div className="cover">
          <div className="text-center mt-5 mb-3 border-bottom">
            <h4>Todo List</h4>
          </div>
          <AddInput addTodo={this.addTodo} />
          <TodoItemPanel onDelete={this.onDelete} todos={this.state.todos} />
        </div>
      </div>
    );
  }
}

export default App;
