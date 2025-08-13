//* Utilitários de validação
export const removeSpecialCharacters = (value: string) => value?.replace(/\D/g, "") || "";

export const validateCEP = (cep: string) => {
  const cleanedCEP = removeSpecialCharacters(cep);
  return cleanedCEP.length === 8;
};

export const validateCPF = (cpf: string) => {
  const cleanedCPF = removeSpecialCharacters(cpf);
  return cleanedCPF.length === 11;
};

export const validateCardNumber = (cardNumber: string) => {
  const cleanedCardNumber = removeSpecialCharacters(cardNumber);
  return cleanedCardNumber.length === 16;
};

export const validateCVV = (cvv: string) => {
  const cleanedCVV = removeSpecialCharacters(cvv);
  return cleanedCVV.length === 3;
};

//* Validação das datas
const getCurrentDate = () => new Date();
export const getCurrentYear = () => getCurrentDate().getFullYear();
export const getCurrentMonth = () => getCurrentDate().getMonth() + 1;
