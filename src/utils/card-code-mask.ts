export const handleCardCodeMask = (value: string) => {
  const cleanValue = value.replace(/\D/g, "").slice(0, 3);

  let maskedValue = cleanValue;
  if (cleanValue.length > 3) {
    maskedValue = cleanValue.slice(0, 3);
  }

  return {
    maskedValue,
    cleanValue,
  };
};
