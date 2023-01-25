import { Component, ReactNode } from 'react';
import './App.css';
import Select from './Select';

type State = {
  fruit: string;
};

class App extends Component<{}, State> {
  state: Readonly<State> = {
    fruit: 'Pomme',
  }

  handleSelected = (value: string) => {
    this.setState({fruit: value})
  }

  render(): ReactNode {
    console.log('render App');

    // const handleClick = () => {};
    // function handleClick() {}

    const { fruit } = this.state;

    return (
      <div className="App">
        {/* React.createElement('div', {className: 'App'}, ...) */}
        <h2>Rappels {new Date().toLocaleTimeString()}</h2>
        <Select items={['Orange', 'Pomme', 'Poire']} selectedValue={fruit} onSelected={this.handleSelected} />
        {/* React.createElement(Select, { items: ['Orange', 'Pomme', 'Poire']}) */}
      </div>
    );
  }
}

export default App;
