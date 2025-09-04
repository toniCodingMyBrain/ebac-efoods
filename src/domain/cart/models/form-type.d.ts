declare type CartFormValues = {
  delivery: {
    receiver: string;
    address: {
      description: string;
      city: string;
      zipCode: string;
      number: string;
      complement: string;
    };
  };
  payment: {
    card: {
      name: string;
      number: string;
      code: string;
      expires: {
        month: string;
        year: string;
      };
    };
  };
};
