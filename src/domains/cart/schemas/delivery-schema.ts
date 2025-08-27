import * as yup from "yup";
import { removeSpecialCharacters, validateCEP } from "../utils/validation-utils";

export const deliverySchemaValidation = yup.object().shape({
  receiver: yup
    .string()
    .required("Nome completo é obrigatório.")
    .min(2, "Nome deve ter pelo menos dois caracteres.")
    .matches(/^[a-zA-ZÀ-ÿ\s]+$/, "Nome deve conter apenas letras."),
  description: yup
    .string()
    .required("Endereço é obrigatório.")
    .min(5, "Endereço deve ter pelo menos cinco caracteres."),
  city: yup
    .string()
    .required("Nome da cidade é obrigatório.")
    .min(3, "Cidade deve conter pelo menos três caracteres."),
  cep: yup
    .string()
    .required("O CEP é obrigatório.")
    .test("cep-validation", "CEP deve conter 8 dígitos: 00000-000", validateCEP)
    .transform(removeSpecialCharacters),
  number: yup
    .string()
    .required("O número da residência é obrigatório.")
    .matches(
      /^\d+[a-zA-Z]?$/,
      "O número da residência deve conter somente números e opcionalmente uma letra."
    ),
  complement: yup.string().max(100, "O complemento deve conter no máximo cem caracteres."),
});
