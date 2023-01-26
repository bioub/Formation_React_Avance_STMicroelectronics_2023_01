import { Component, memo, PureComponent, ReactNode } from 'react';
import { Todo } from './Todo';
import TodoItem from './TodoItem';

type TodosListProps = {
  items: Todo[];
  onDelete?(todo: Todo): void;
};

// class TodosList extends PureComponent<TodosListProps> {

//   // shouldComponentUpdate(nextProps: Readonly<TodosListProps>, nextState: Readonly<{}>, nextContext: any): boolean {
//   //   return this.props.items !== nextProps.items;
//   // }

//   render(): ReactNode {
//     console.log('render TodosList');
//     const { items, onDelete } = this.props;
//     return (
//       <div className="TodosList">
//         {items.map((item) => (
//           <TodoItem key={item.id} item={item} onDelete={onDelete} />
//         ))}
//       </div>
//     );
//   }
// }

function TodosList({ items, onDelete }: TodosListProps) {
  console.log('render TodosList');
  return <div className="TodosList">
    {items.map((item) => <TodoItem key={item.id} item={item} onDelete={onDelete} />)}
  </div>;
}

// export default memo(TodosList, (prevProps, nextProps) => prevProps.items === nextProps.items);


export default memo(TodosList);