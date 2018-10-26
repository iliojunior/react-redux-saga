import React from 'react';
import { connect } from 'react-redux';

const Counter = (props) => (
  <h2>Voce tem: {props.todos.length}</h2>
);

const mapStateToProps = state => ({
  todos: state.todos,
});

export default connect(mapStateToProps)(Counter);
