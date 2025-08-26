import { DeliveryInfo } from "./delivery-info";
import { PaymentInfo } from "./payment-info";

export interface CartFormData {
  delivery: DeliveryInfo;
  payment: PaymentInfo;
}
