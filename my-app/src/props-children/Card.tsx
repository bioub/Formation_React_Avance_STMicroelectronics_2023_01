import { ReactNode, PropsWithChildren } from 'react';
import styles from './Card.module.css';

type Props = {
  title?: ReactNode;
};

function Card({ title = 'Contenu', children }: PropsWithChildren<Props>) {
  return (
    <div className={styles.host}>
      <div className={styles.title}>{title}</div>
      <div className={styles.body}>{children}</div>
    </div>
  );
}

export default Card;
