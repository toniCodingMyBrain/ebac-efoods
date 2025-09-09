import { ChangeEvent } from "react";

type Setter<T> = React.Dispatch<React.SetStateAction<T>>;

export const handleCEPChangeMask = (
  event: ChangeEvent<HTMLInputElement>,
  setCep: Setter<string>,
  setRawCep: Setter<string>
) => {
  const value = event.target.value;

  const cleanValue = value.replace(/\D/g, "");

  let maskedValue = cleanValue;
  if (cleanValue.length > 5) {
    maskedValue = cleanValue.slice(0, 5) + "-" + cleanValue.slice(5, 8);
  }

  setCep(maskedValue);
  setRawCep(cleanValue.split("-").toString());
};
