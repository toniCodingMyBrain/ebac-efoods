import * as yup from "yup";
import { deliverySchemaValidation } from "./delivery-schema";
import { paymentSchemaValidation } from "./payment-schema";

export const cartValidationSchemas = yup.object().shape({
  deliveryValidation: deliverySchemaValidation,
  paymentValidation: paymentSchemaValidation,
});
