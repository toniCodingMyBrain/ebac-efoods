import { CardButton } from "./style";

export type ButtonProps = {
  typeButton: string;
  buttonTitle: string;
  to?: string;
  onClick?: () => void;
  children: string;
};

export const Button = ({
  typeButton,
  buttonTitle,
  to,
  children,
}: ButtonProps) => (
  <>
    <CardButton typeButton={typeButton} title={buttonTitle} to={to as string}>
      {children}
    </CardButton>
  </>
);
