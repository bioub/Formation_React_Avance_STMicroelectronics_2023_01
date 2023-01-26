import { useEffect, useRef } from 'react';
import FormRow, { FormRowRef } from './FormRow';

function Form() {
  console.log('render Form');
  const nameFormRowRef = useRef<FormRowRef>(null);

  useEffect(() => {
    nameFormRowRef.current?.init();
  }, []);

  return (
    <form className="Form">
      <FormRow label="Name" name="name" type="text" ref={nameFormRowRef} />
      <FormRow label="Email" name="email" type="email" />
      <div>
        <button>Submit</button>
      </div>
    </form>
  );
}

export default Form;
