import { SyntheticEvent, useEffect, useRef } from 'react';
import FormRow from './FormRow';

function Form() {
  console.log('render Form');
  const nameInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);

  // useEffect(() => {
  //   nameInputRef.current?.focus();
  // }, []);

  const handleSubmit = (event: SyntheticEvent<HTMLFormElement, SubmitEvent>) => {
    event.preventDefault();
    const user = {
      name: nameInputRef.current?.value,
      email: emailInputRef.current?.value,
    };

    console.log('user', user);
  };

  return (
    <form className="Form" onSubmit={handleSubmit}>
      <FormRow label="Name" name="name" type="text" ref={nameInputRef} />
      <FormRow label="Email" name="email" type="email" ref={emailInputRef} />
      <div>
        <button>Submit</button>
      </div>
    </form>
  );
}

export default Form;
