import { Todo } from './Todo';

type TodoItemProps = {
  item: Todo;
  onDelete?(todo: Todo): void;
};

function TodoItem({ item, onDelete }: TodoItemProps) {
  console.log('render TodoItem');
  return (
    <div className="TodoItem">
      <input type="checkbox" defaultChecked={item.completed} />
      <span>{item.title}</span>
      <button onClick={() => onDelete && onDelete(item)}>-</button>
    </div>
  );
}

export default TodoItem;
