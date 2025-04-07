import { CardButton } from "./style";

type ButtonProps = {
  buttonTitle: string;
  to?: string;
  onClick?: () => void;
  children: string;
};

export const Button = ({ buttonTitle, to, children }: ButtonProps) => (
  <>
    <CardButton title={buttonTitle} to={to as string}>
      {children}
    </CardButton>
  </>
);
