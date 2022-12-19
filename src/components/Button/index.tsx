import { FC } from 'react';

type ButtonProps = {
  onClick?: () => void;
  buttonText: string;
  data?: string;
};

export const Button: FC<ButtonProps> = ({ onClick, buttonText, data }) => {
  return (
    <button data-testid={data} onClick={onClick}>
      {buttonText}
    </button>
  );
};
