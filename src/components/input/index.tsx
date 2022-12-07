import React, { FC, useContext } from 'react';
import Context from '../context/Context';
import styles from './input.module.css';

type InputProps = {
  label?: string;
};

export const Input: FC<InputProps> = ({ label }) => {
  const { setPlayer } = useContext(Context);

  const playerNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlayer(e.target.value);
  };

  return (
    <div className={styles['input-container']}>
      {label && <label>{label}</label>}
      <input className={styles['input-base']} onChange={playerNameHandler} />
    </div>
  );
};
