import { SyntheticEvent } from 'react';

type TodoFormProps = {
  newValue: string;
  onNewValueChange(value: string): void;
  onAdd(): void;
};

function TodoForm({ newValue, onNewValueChange, onAdd }: TodoFormProps) {
  console.log('render TodoForm');
  const handleSubmit = (event: SyntheticEvent<HTMLFormElement, SubmitEvent>) => {
    event.preventDefault();
    onAdd();
  };

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input value={newValue} onChange={(e) => onNewValueChange(e.target.value)} />
      <button>+</button>
    </form>
  );
}

export default TodoForm;
