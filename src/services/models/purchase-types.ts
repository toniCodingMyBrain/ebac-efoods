export type PurchasePayload = {
  products: ProductPurchase[];
  delivery: {
    receiver: string;
    address: {
      description: string;
      city: string;
      zipCode: string;
      number: number;
      complement: string;
    };
  };
  payment: {
    card: {
      name: string;
      number: string;
      code: number;
      expires: {
        month: number;
        year: number;
      };
    };
  };
};

export type ProductPurchase = {
  id: number;
  price: number;
};

export type PurchaseResponse = {
  orderId: string;
};
