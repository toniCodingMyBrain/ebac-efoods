export const handleCardNumberMask = (value: string) => {
  const cleanValue = value.replace(/\D/g, "").slice(0, 16);

  let maskedValue = cleanValue;
  maskedValue = cleanValue.match(/.{1,4}/g)?.join(" ") || "";

  return { maskedValue, cleanValue };
};
