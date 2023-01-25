import styles from './Select.module.css';

import { Component, createRef, ReactNode } from 'react';

function Child() {
  console.log('render Child');
  return null;
}

type Props = {
  items?: string[];
  selectedValue?: string;
  onSelected(value: string): void;
};

type State = {
  menuOpen: boolean;
};

class Select extends Component<Props, State> {
  state: Readonly<State> = {
    menuOpen: false,
  };

  hostRef = createRef<HTMLDivElement>();

  handleHostClick = () => {
    const { menuOpen } = this.state;
    this.setState({
      menuOpen: !menuOpen,
    });
  };

  handleItemClick = (item: string) => {
    const { onSelected } = this.props;
    onSelected(item);
  };

  componentDidMount() {
    const callback = (event: MouseEvent) => {
      if (this.state.menuOpen && !this.hostRef.current?.contains(event.target as HTMLElement)) {
        this.setState({
          menuOpen: false,
        });
      }
    };
    window.addEventListener('click', callback);
  }

  render(): ReactNode {
    console.log('render Select');

    const { items = [], selectedValue = '' } = this.props;
    const { menuOpen } = this.state;

    return (
      <div ref={this.hostRef} className={styles.host} onClick={this.handleHostClick}>
        <Child />
        <div className={styles.selected}>{selectedValue}</div>
        {menuOpen && (
          <div className={styles.menu}>
            {items.map((item) => (
              <div className={styles.choice} key={item} onClick={() => this.handleItemClick(item)}>
                {item}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default Select;
