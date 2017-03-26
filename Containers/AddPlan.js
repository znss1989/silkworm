import React from 'react'
import {connect} from 'react-redux'
import ActionCreators from '../Actions/ActionCreators'
import AddPlanView from '../Components/AddPlanView'

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
      onPlanSubmit: (title, brief) => {
          dispatch(ActionCreators.createPlan(title, brief));
      }
  }
};

const AddPlan = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddPlanView);

export default AddPlan;

/*import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

let AddTodo = ({ dispatch }) => {
  let input;

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return;
        }
        dispatch(addTodo(input.value));
        input.value = '';
      }}>
        <input ref={node => {
          input = node;
        }} />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  );
};
AddTodo = connect()(AddTodo);

export default AddTodo;*/



// import { connect } from 'react-redux'
// import { toggleTodo } from '../actions'
// import TodoList from '../components/TodoList'


// const getVisibleTodos = (todos, filter) => {
//   switch (filter) {
//     case 'SHOW_ALL':
//       return todos
//     case 'SHOW_COMPLETED':
//       return todos.filter(t => t.completed)
//     case 'SHOW_ACTIVE':
//       return todos.filter(t => !t.completed)
//   }
// };

// const mapStateToProps = (state) => {
//   return {
//     todos: getVisibleTodos(state.todos, state.visibilityFilter)
//   }
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onTodoClick: (id) => {
//       dispatch(toggleTodo(id))
//     }
//   }
// };

// const VisibleTodoList = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(TodoList);

// export default VisibleTodoList;


/*import React, { PropTypes } from 'react'
import Todo from './Todo'

const TodoList = ({ todos, onTodoClick }) => (
  <ul>
    {todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => onTodoClick(todo.id)}
      />
    )}
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired
};

export default TodoList;*/