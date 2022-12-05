import React, { FC, useState } from 'react';
import styles from './input.module.css';

type InputProps = {
  label?: string;
  playerName?: string;
};

export const Input: FC<InputProps> = ({ label, playerName }) => {
  const [nameInput, setNameInput] = useState<string>();

  const playerNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNameInput(e.target.value);
  };

  return (
    <div className={styles['input-container']}>
      {label && <label>{label}</label>}
      <input className={styles['input-base']} onChange={playerNameHandler} />
    </div>
  );
};
