export interface DeliveryInfo {
  receiver: string;
  address: string;
  city: string;
  cep: string;
  number: string;
  description?: string; // Complemento é opcional
}
