import { FC } from 'react';

type ButtonProps = {
  onClick?: () => void;
  buttonText: string;
};

export const Button: FC<ButtonProps> = ({ onClick, buttonText }) => {
  return <button onClick={onClick}>{buttonText}</button>;
};
