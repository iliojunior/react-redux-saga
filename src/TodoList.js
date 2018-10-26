import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as todoActions from './actions/todos';


class TodoList extends Component {
  state = {
    newTodoText: ''
  };

  addNewTodo = () => {
    const { newTodoText } = this.state;
    this
      .props
      .addTodo(newTodoText);

    this.setState({ newTodoText: '' });
  };

  onChangeField = (e) => {
    this.setState({ newTodoText: e.target.value });
  };

  render() {
    const { newTodoText } = this.state;
    const { todos } = this.props;

    return (
      <div>
        <ul>
          {todos.map(todo => (
            <li key={todo.id}>{todo.payload.text}</li>
          ))}
        </ul>

        <input
          type="text"
          value={newTodoText}
          onChange={this.onChangeField}
          />
        <button onClick={this.addNewTodo}>Novo todo</button>
      </div>
    );
  }
};

const mapDispatchToProps = dispatch => bindActionCreators(todoActions, dispatch);

const mapStateToProps = state => ({
  todos: state.todos,
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
