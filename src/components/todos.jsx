import React, { Component } from 'react';
import { addTodo } from "../store/todos/todoActions";
import { connect } from "react-redux";

class Todos extends Component {

  state = {  }

  handleAddTodo = () => {
    let newId = this.autoIncrement();
    this.props.addTodo(newId, `Todo task ${newId}`);
  };

  autoIncrement(){
    let newId = 1;
    this.props.todos.map( todo => {
      if( todo.id >= newId ) newId++;
      return todo;
    });
    return newId;
  }

  render() { 

    const { todos } = this.props;

    return ( 
      <div>
        <button onClick={this.handleAddTodo}>+ Add New Todo</button>
        <ul>
          { todos.map( todo => <li key={todo.id}>{todo.title}</li> ) }
        </ul>
      </div> 
    
    );
  }

}

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (id, title) => dispatch( addTodo(id, title) )
  };
};
 
export default connect(mapStateToProps, mapDispatchToProps)(Todos);