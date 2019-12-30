import React from "react";
import Todos from "./Todos";
import AddForm from "./AddForm";
import { connect } from "react-redux";
import { deleteTodoAction, addTodoAction } from "./actions/todoActions";

class App extends React.Component {
  deleteTodo = id => {
    this.props.deleteTodo(id);
  };

  addTodo = todo => {
    this.props.addTodo(todo);
  };

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={this.props.todos} deleteTodo={this.deleteTodo} />
        <AddForm addTodo={this.addTodo} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteTodo: id => {
      dispatch(deleteTodoAction(id));
    },
    addTodo: todo => {
      dispatch(addTodoAction(todo));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
