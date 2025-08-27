import { CardButton } from "./style";

export type ButtonProps = {
  type?: string;
  typeButton: string;
  buttonTitle: string;
  to?: string;
  onClick?: () => void;
  children: string;
};

export const Button = ({ typeButton, buttonTitle, to, children, onClick }: ButtonProps) => {
  return (
    <>
      <CardButton typeButton={typeButton} title={buttonTitle} to={to as string} onClick={onClick}>
        {children}
      </CardButton>
    </>
  );
};
