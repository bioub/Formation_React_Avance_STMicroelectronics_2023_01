import { Component, ReactNode } from 'react';
import './App.css';
import Clock from './hooks/Clock';
import Counter from './hooks/Counter';
import Select from './Select';
import UsersList from './hooks/UsersLists';
import Form from './forwarding-refs/Form';
import FormWithImperativeHandle from './use-imperative-handle/Form';
import Card from './props-children/Card';
import Tabs from './render-props/Tabs';

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
        {/*
        Exercice Render Props
        Ajouter une prop renderSelectedItem qui est une fonction permettant de faire
        le rendu de l'élément selectionné dans le menu
        */}

        {/* React.createElement(Select, { items: ['Orange', 'Pomme', 'Poire']}) */}
        <h2>Hooks</h2>
        <Counter />
        <Clock />
        <UsersList />
        <h2>Forwarding refs</h2>
        <Form />
        <FormWithImperativeHandle />
        <h2>Props children (composition) + Fragment</h2>
        <Card title={<><p>Title (from App)</p><p>Title (from App)</p></>}>
          <p>Content (from App)</p>
          <p>Content (from App)</p>
        </Card>

        <Tabs items={['Tab 1', 'Tab 2', 'Tab 3']} renderItem={(item) => <b>{item}</b>} />
      </div>
    );
  }
}

export default App;
