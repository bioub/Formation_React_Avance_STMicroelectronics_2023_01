import { forwardRef, useImperativeHandle, useRef } from "react";

type Props = {
  label: string;
  name: string;
  type: string;
};

export type FormRowRef = {
  init(): void;
}

const FormRow = forwardRef<FormRowRef, Props>(function FormRow({ label, name, type }: Props, ref) {
  console.log('render FormRow');

  const inputRef = useRef<HTMLInputElement>(null)

  useImperativeHandle(ref, () => {
    return {
      init() {
        inputRef.current?.focus();
      },
    };
  }, []);

  return (
    <div className="FormRow">
      <label>{label}:</label>
      <input type={type} name={name} ref={inputRef} />
    </div>
  );
});

export default FormRow;
