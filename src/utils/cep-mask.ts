export const handleCEPChangeMask = (value: string) => {
  const cleanValue = value.replace(/\D/g, "").slice(0, 8);

  let maskedValue = cleanValue;
  if (cleanValue.length > 5) {
    maskedValue = cleanValue.slice(0, 5) + "-" + cleanValue.slice(5);
  }

  return {
    maskedValue,
    cleanValue,
  };
};
