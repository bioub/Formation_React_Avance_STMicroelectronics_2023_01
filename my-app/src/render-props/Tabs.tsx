import { ReactNode } from 'react';
import styles from './Tabs.module.css';

type Props = {
  items?: string[];
  renderItem?(item: string): ReactNode;
};

function Tabs({ items = [], renderItem }: Props) {
  return (
    <div className={styles.host}>
      {items.map((item) => (
        <div className={styles.tab} key={item}>
          {renderItem ? renderItem(item) : item}
        </div>
      ))}
    </div>
  );
}

export default Tabs;
