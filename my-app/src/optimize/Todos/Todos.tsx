import { Component, useCallback, useMemo, useState } from 'react';
import { Todo } from './Todo';
import TodoForm from './TodoForm';
import TodosList from './TodosList';

type TodosProps = {};
type TodosState = {
  todos: Todo[];
  newTodo: string;
};

// class Todos extends Component<TodosProps, TodosState> {
//   state: Readonly<TodosState> = {
//     // todos: [
//     //   { id: Math.random(), title: 'ABC', completed: true },
//     //   { id: Math.random(), title: 'DEF', completed: false },
//     // ],
//     todos: (new Array(2000)).fill({}).map(() => ({ id: Math.random(), title: 'ABC', completed: Math.random() > 0.5 })),
//     newTodo: 'XYZ',
//   };

//   handleNewValueChange = (value: string) => {
//     this.setState({
//       newTodo: value,
//     });
//   };

//   handleAdd = () => {
//     // changement immuable preferable pour la perf
//     this.setState({
//       todos: [
//         ...this.state.todos,
//         {
//           id: Math.random(),
//           title: this.state.newTodo,
//           completed: false,
//         },
//       ],
//     });
//   };

//   handleDelete = (todo: Todo) => {
//     this.setState({
//       todos: this.state.todos.filter((el) => el.id !== todo.id),
//     });
//   };

//   render() {
//     console.log('render Todos');
//     return (
//       <div className="Todos">
//         <TodoForm newValue={this.state.newTodo} onNewValueChange={this.handleNewValueChange} onAdd={this.handleAdd} />
//         <TodosList items={this.state.todos} onDelete={this.handleDelete} />
//       </div>
//     );
//   }
// }

function Todos() {
  console.log('render Todos');
  const [todos, setTodos] = useState(
    new Array(2000).fill({}).map(() => ({ id: Math.random(), title: String(Math.random()), completed: Math.random() > 0.5 })),
  );
  const [newTodo, setNewTodo] = useState('XYZ');

  const handleNewValueChange = (value: string) => {
    setNewTodo(value);
  };

  const handleAdd = () => {
    // changement immuable preferable pour la perf
    setTodos([
      ...todos,
      {
        id: Math.random(),
        title: newTodo,
        completed: false,
      },
    ]);
  };

  // const handleDelete = (todo: Todo) => {
  //   setTodos(todos.filter((el) => el.id !== todo.id));
  // };

  // const handleDelete = useMemo(
  //   () => (todo: Todo) => {
  //     setTodos((todos) => todos.filter((el) => el.id !== todo.id));
  //   },
  //   [],
  // );

  // const handleDelete = useMemo(
  //   () => (todo: Todo) => {
  //     setTodos(todos.filter((el) => el.id !== todo.id));
  //   },
  //   [todos],
  // );

  const handleDelete = useCallback(
    (todo: Todo) => {
      setTodos(todos.filter((el) => el.id !== todo.id));
    },
    [todos],
  );

  return (
    <div className="Todos">
      <TodoForm newValue={newTodo} onNewValueChange={handleNewValueChange} onAdd={handleAdd} />
      <TodosList items={todos} onDelete={handleDelete} />
    </div>
  );
}

export default Todos;
