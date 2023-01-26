import { useDebugValue, useEffect, useState } from 'react';

/*
type Props = {};
type State = {
  now: Date;
}

class Clock extends Component<Props, State> {
  state: Readonly<State> = {
    now: new Date(),
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({
        now: new Date(),
      });
    }, 1000);
  }

  render() {
    const { now } = this.state;
    return (
      <div className="Clock">
        {now.toLocaleTimeString()}
      </div>
    )
  }
}
*/

/*
function Clock() {
  const [now, setNow] = useState(new Date());

  // componentDidMount + componentDidUpdate
  // useEffect(() => {
  //   console.log('componentDidMount + componentDidUpdate');
  // });

  // componentDidMount
  // useEffect(() => {
  //   console.log('componentDidMount');
  // }, []);

  // componentDidMount + componentDidUpdate (si la dépendence (ici now) change)
  // useEffect(() => {
  //   console.log('componentDidMount + componentDidUpdate (si la dépendence (ici now) change)');
  //   setTimeout(() => {
  //     setNow(new Date())
  //   }, 2000);
  // }, [now]);

  // componentDidMount + componentWillUnmount + componentDidUpdate + componentWillUpdate
  // useEffect(() => {
  //   console.log('componentDidMount + componentDidUpdate');
  //   return () => {
  //     console.log('componentWillUnmount + componentWillUpdate');
  //   };
  // });

  // componentDidMount + componentWillUnmount
  // useEffect(() => {
  //   console.log('componentDidMount');
  //   return () => {
  //     console.log('componentWillUnmount');
  //   };
  // }, []);

  // componentDidMount + componentWillUnmount + componentDidUpdate (si la dépendence (ici now) change) + componentWillUpdate (si la dépendence (ici now) change)
  // useEffect(() => {
  //   console.log('componentDidMount + componentDidUpdate (si la dépendence (ici now) change)');
  //   return () => {
  //     console.log('componentWillUnmount + componentWillUpdate (si la dépendence (ici now) change)');
  //   };
  // }, [now]);

  // appel setInterval quand le composant apparait puis plus jamais
  useEffect(() => {
    setInterval(() => {
      setNow(new Date());
    }, 1000);
  }, []);

  return <div className="Clock">{now.toLocaleTimeString()}</div>;
}
*/

function useNow() {
  const [now, setNow] = useState(new Date());

  useDebugValue(now.toLocaleTimeString());

  useEffect(() => {
    setInterval(() => {
      setNow(new Date());
    }, 1000);
  }, []);

  return now;
}

function Clock() {
  const now = useNow();

  return <div className="Clock">{now.toLocaleTimeString()}</div>;
}

export default Clock;
