import  { ChangeEvent, useState } from 'react';

// type Props = {};

// type State = {
//   step: number;
//   count: number;
// };

// class Counter extends Component<Props, State> {
//   state: Readonly<State> = {
//     step: 1,
//     count: 0,
//   };

//   handleChange = (event: ChangeEvent<HTMLInputElement>) => {
//     this.setState({
//       step: event.target.valueAsNumber,
//     });
//   };

//   handleClick = () => {
//     const { step, count } = this.state;

//     this.setState({
//       count: count + step,
//     });
//   };

//   render(): ReactNode {
//     const { step, count } = this.state;
//     return (
//       <div className="Counter">
//         <div>
//           Step : <input type="number" value={step} onChange={this.handleChange} />
//         </div>
//         <div>
//           Count : <span>{count}</span>
//         </div>
//         <div>
//           <button onClick={this.handleClick}>Increment</button>
//         </div>
//       </div>
//     );
//   }
// }


// Quand on utilise le state avec les classes
// Le state est un objet :
// {
//   step: 1,
//   count: 0,
// }

// Quand on utilise le state avec le hook useState
// Le state est un tableau :
// [1, 0]

function Counter() {
  const [step, setStep] = useState(1); // le premier appel récupère le premier élément du State (qui est un tableau)
  const [count, setCount] = useState(0); // le 2e appel récupère le 2e élément du State (qui est un tableau)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setStep(event.target.valueAsNumber);
  };

  const handleClick = () => {
    setCount(count + step);
  };

  return (
    <div className="Counter">
      <div>
        Step : <input type="number" value={step} onChange={handleChange} />
      </div>
      <div>
        Count : <span>{count}</span>
      </div>
      <div>
        <button onClick={handleClick}>Increment</button>
      </div>
    </div>
  );
}

export default Counter;