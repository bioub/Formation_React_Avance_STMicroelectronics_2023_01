import styles from './Select.module.css';

import { Component, ReactNode } from 'react';

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

  handleHostClick = () => {
    const { menuOpen } = this.state;
    this.setState({
      menuOpen: !menuOpen,
    });
  };

  handleItemClick = (item: string) => {
    const { onSelected } = this.props;
    onSelected(item);
    // TODO mettre à jour le state du parent
    // this.setState({
    //   selectedValue: item,
    // });
  };

  render(): ReactNode {
    console.log('render Select');
    
    const { items = [], selectedValue = '' } = this.props;
    const { menuOpen } = this.state;

    return (
      <div className={styles.host} onClick={this.handleHostClick}>
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
