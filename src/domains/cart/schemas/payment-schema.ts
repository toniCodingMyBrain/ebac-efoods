import * as yup from "yup";
import {
  getCurrentMonth,
  getCurrentYear,
  removeSpecialCharacters,
  validateCardNumber,
  validateCVV,
} from "../utils/validation-utils";

export const paymentSchemaValidation = yup.object().shape({
  cardName: yup
    .string()
    .required("Nome no cartão é obrigatório")
    .min(2, "Nome deve ter pelo menos 2 caracteres")
    .matches(/^[a-zA-ZÀ-ÿ\s]+$/, "Nome deve conter apenas letras"),

  cardNumber: yup
    .string()
    .required("Número do cartão é obrigatório")
    .test("card-valid", "Número do cartão deve ter 16 dígitos", validateCardNumber)
    .transform(removeSpecialCharacters),

  cvv: yup
    .string()
    .required("CVV é obrigatório")
    .test("cvv-valid", "CVV deve ter 3 dígitos", validateCVV)
    .transform(removeSpecialCharacters),
  expiresMonth: yup
    .string()
    .required("Mês de vencimento é obrigatório")
    .matches(/^(0[1-9]|1[0-2])$/, "Mês deve estar entre 01 e 12")
    .test("expires-month-validation", "Data deve estar correta.", function (value) {
      const year = parseInt(this.parent.expiresYear);
      const month = parseInt(value);
      const currentYear = getCurrentYear();
      const currentMonth = getCurrentMonth();

      if (year > currentYear) return true;
      if (year === currentYear && month >= currentMonth) return true;

      return false;
    }),
  expiresYear: yup
    .string()
    .required("Ano de vencimento é obrigatório")
    .matches(/^\d{4}$/, "Ano deve ter 4 dígitos")
    .test("expires-year-validation", "Data deve estar correta.", function (value) {
      const year = parseInt(value);
      const currentYear = getCurrentYear();
      return year >= currentYear;
    }),
});
