import { FC } from 'react';
import styles from './loader.module.css';

export const Loader: FC = () => {
  return (
    <div className={styles['loader-container']}>
      <span className={styles.loader}></span>
    </div>
  );
};
