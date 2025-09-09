import { ChangeEvent } from "react";

type Setter<T> = React.Dispatch<React.SetStateAction<T>>;

export const handleCardNumberMask = (
  event: ChangeEvent<HTMLInputElement>,
  setCardNumber: Setter<string>,
  setRawCardNumber: Setter<string>
) => {
  const value = event.target.value;

  const cleanValue = value.replace(/\D/g, "");

  let maskedValue = cleanValue;
  maskedValue = cleanValue.match(/.{1,4}/g)?.join(" ") || "";

  setCardNumber(maskedValue);
  setRawCardNumber(cleanValue);
};
