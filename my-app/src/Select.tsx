import styles from './Select.module.css';

import { ReactNode, useEffect, useRef, useState } from 'react';

function Child() {
  console.log('render Child');
  return null;
}

type Props = {
  items?: string[];
  selectedValue?: string;
  onSelected(value: string): void;
  renderSelectedItem?(item: string): ReactNode;
};

/*
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
        console.log('setState called');
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
*/


function Select({ items = [], selectedValue = '', onSelected = () => {}, renderSelectedItem = (item: string) => item }: Props) {
  console.log('render Select');
  const [menuOpen, setMenuOpen] = useState(false);
  const hostRef = useRef<HTMLDivElement>(null);

  const handleHostClick = () => {
    setMenuOpen(!menuOpen);
  };

  const handleItemClick = (item: string) => {
    onSelected(item);
  };

  useEffect(() => {
    const callback = (event: MouseEvent) => {
      if (!hostRef.current?.contains(event.target as HTMLElement)) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('click', callback);
    // TODO removeEventListener
  }, []);

  return (
    <div ref={hostRef} className={styles.host} onClick={handleHostClick}>
      <Child />
      <div className={styles.selected}>{selectedValue}</div>
      {menuOpen && (
        <div className={styles.menu}>
          {items.map((item) => (
            <div className={styles.choice} key={item} onClick={() => handleItemClick(item)}>
              {(item === selectedValue) ? renderSelectedItem(item) : item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}


export default Select;
