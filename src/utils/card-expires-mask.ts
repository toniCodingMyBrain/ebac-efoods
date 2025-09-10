export const handleCardExpiresMask = (value: string, repeat: number) => {
  let cleanValue = value.replace(/\D/g, "").slice(0, repeat);

  let maskedValue = cleanValue;
  if (cleanValue.length > repeat) {
    maskedValue = cleanValue.slice(0, repeat);
  }

  if (repeat === 2) {
    if (cleanValue.length === 1) {
      const firstDigit = parseInt(cleanValue, 10);
      if (firstDigit > 1 && firstDigit <= 9) {
        maskedValue = "0" + firstDigit.toString();
        cleanValue = maskedValue;
      } else if (firstDigit === 1) {
        maskedValue = "1";
        cleanValue = "01";
      } else if (firstDigit === 0) {
        maskedValue = cleanValue;
      }
    } else if (cleanValue.length === 2) {
      const monthNum = parseInt(cleanValue, 10);
      if (monthNum === 0) {
        maskedValue = "01";
      } else if (monthNum > 12) {
        maskedValue = cleanValue.charAt(0);
      } else {
        maskedValue = cleanValue;
      }
      cleanValue = maskedValue;
    }
  }

  return {
    maskedValue,
    cleanValue,
  };
};
