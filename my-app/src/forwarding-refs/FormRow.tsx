import { forwardRef, useImperativeHandle, useRef } from "react";

type Props = {
  label: string;
  name: string;
  type: string;
};

const FormRow = forwardRef<HTMLInputElement, Props>(function FormRow({ label, name, type }: Props, ref) {
  console.log('render FormRow');

  return (
    <div className="FormRow">
      <label>{label}:</label>
      <input type={type} name={name} ref={ref} />
    </div>
  );
});

export default FormRow;
