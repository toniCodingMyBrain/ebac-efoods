import { useDispatch, useSelector } from "react-redux";

import {
  BuyInfos,
  CartContainer,
  CartItem,
  CartSidebar,
  FinishedOrder,
  FormContainer,
  RowBlock,
} from "./style";
import { RootReducer } from "../../../../store";
import { closeCart, removeFromCart } from "../../../../store/reducers/cart-reducer";
import { useEffect, useRef, useState } from "react";
import { priceFormater } from "../../../../utils/priceFormater";
import { Button } from "../../../../components/layout/button";
import { useFormik } from "formik";
import * as yup from "yup";
import { deliverySchemaValidation } from "../../schemas/delivery-schema";
import { paymentSchemaValidation } from "../../schemas/payment-schema";
import { usePurchaseMutation } from "../../../../services/api";

const Cart = () => {
  const [purchase, { data, isSuccess, status }] = usePurchaseMutation();
  const { isOpen, food, checkoutState } = useSelector(
    (state: RootReducer) => state.persistedReducer.cart
  );
  const dispatch = useDispatch();

  console.log(data);
  console.log(isSuccess);
  console.log(status);
  console.log();

  const cartForm = useFormik({
    initialValues: {
      addressForm: {
        fullName: "",
        address: "",
        city: "",
        cep: "",
        number: "",
        description: "",
      },
      paymentForm: {
        cardName: "",
        cardNumber: "",
        cvv: "",
        expireMonth: "",
        expireYear: "",
      },
    },
    validationSchema: yup.object({
      delivery: deliverySchemaValidation,
      payment: paymentSchemaValidation,
    }),
    onSubmit: (values) =>
      purchase({
        products: [
          {
            id: 2,
            price: 100,
          },
        ],
        delivery: {
          receiver: values.addressForm.fullName,
          address: {
            description: values.addressForm.address,
            city: values.addressForm.city,
            zipCode: values.addressForm.cep,
            number: Number(values.addressForm.number),
            complement: values.addressForm.description,
          },
        },
        payment: {
          card: {
            name: values.paymentForm.cardName,
            number: values.paymentForm.cardNumber,
            code: Number(values.paymentForm.cvv),
            expires: {
              month: Number(values.paymentForm.expireMonth),
              year: Number(values.paymentForm.expireYear),
            },
          },
        },
      }),
  });

  const [step, setStep] = useState(1);

  const handleRemoveItem = (id: number) => {
    dispatch(removeFromCart(id));
  };

  const getTotalPrice = () => {
    return food.reduce((acumulator, nextPrice) => {
      return (acumulator += Number(nextPrice.preco));
    }, 0);
  };

  const nextStepCart = () => {
    if (step === 1 && food.length > 0) {
      setStep(2);
    }
    if (
      step === 2 &&
      cartForm.values.addressForm.address.trim().length > 0 &&
      cartForm.values.addressForm.fullName.trim().length > 0 &&
      cartForm.values.addressForm.city.trim().length > 0 &&
      cartForm.values.addressForm.cep.trim().length > 0 &&
      cartForm.values.addressForm.number.trim().length > 0 &&
      cartForm.values.addressForm.description.trim().length > 0
    ) {
      setStep(3);
    }
    if (
      step === 3 &&
      cartForm.values.paymentForm.cardName.trim().length &&
      cartForm.values.paymentForm.cardNumber.trim().length &&
      cartForm.values.paymentForm.cvv.trim().length &&
      cartForm.values.paymentForm.expireMonth.trim().length &&
      cartForm.values.paymentForm.expireYear.trim().length
    ) {
      setStep(4);
    }
  };

  const cartRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleOutsideClick(event: MouseEvent) {
      if (cartRef.current && !cartRef.current.contains(event.target as Node)) {
        dispatch(closeCart());
      }
    }

    if (isOpen === true) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen, dispatch]);

  return (
    <>
      <CartContainer className={isOpen ? "is-open" : ""}>
        <CartSidebar ref={cartRef}>
          {step === 1 && (
            <>
              <ul>
                {food.map((item) => (
                  <CartItem>
                    <img src={item.foto} alt={item.descricao} />
                    <div>
                      <h4>{item.nome}</h4>
                      <p>{priceFormater(item.preco)}</p>
                    </div>
                    <button type="button" onClick={() => handleRemoveItem(item.id)} />
                  </CartItem>
                ))}
              </ul>
              <BuyInfos>
                <h4>Valor Total</h4>
                <h4>{priceFormater(getTotalPrice())}</h4>
              </BuyInfos>
              <Button
                typeButton="secondary"
                buttonTitle="Prosseguir para comprar"
                onClick={nextStepCart}
              >
                Comprar
              </Button>
            </>
          )}
          <FormContainer>
            <form onSubmit={cartForm.handleSubmit}>
              {step === 2 && (
                <>
                  <h4>Entrega</h4>
                  <div>
                    <RowBlock>
                      <label htmlFor="fullName">Quem irá receber</label>
                      <input
                        id="fullName"
                        type="text"
                        name="addressForm.fullName"
                        value={cartForm.values.addressForm.fullName}
                        onChange={cartForm.handleChange}
                        onBlur={cartForm.handleBlur}
                      />
                    </RowBlock>
                    <RowBlock>
                      <label htmlFor="address">Endereço</label>
                      <input
                        id="address"
                        type="text"
                        name="addressForm.address"
                        value={cartForm.values.addressForm.address}
                        onChange={cartForm.handleChange}
                        onBlur={cartForm.handleBlur}
                      />
                    </RowBlock>
                    <RowBlock>
                      <label htmlFor="city">Cidade</label>
                      <input
                        id="city"
                        type="text"
                        name="addressForm.city"
                        value={cartForm.values.addressForm.city}
                        onChange={cartForm.handleChange}
                        onBlur={cartForm.handleBlur}
                      />
                    </RowBlock>
                    <RowBlock inputRowType="double">
                      <div>
                        <label htmlFor="cep">CEP</label>
                        <input
                          id="cep"
                          type="text"
                          name="addressForm.cep"
                          value={cartForm.values.addressForm.cep}
                          onChange={cartForm.handleChange}
                          onBlur={cartForm.handleBlur}
                        />
                      </div>
                      <div>
                        <label htmlFor="number">Número</label>
                        <input
                          id="number"
                          type="text"
                          name="addressForm.number"
                          value={cartForm.values.addressForm.number}
                          onChange={cartForm.handleChange}
                          onBlur={cartForm.handleBlur}
                        />
                      </div>
                    </RowBlock>
                    <RowBlock>
                      <label htmlFor="description">Complemento</label>
                      <input
                        id="description"
                        type="text"
                        name="addressForm.description"
                        value={cartForm.values.addressForm.description}
                        onChange={cartForm.handleChange}
                        onBlur={cartForm.handleBlur}
                      />
                    </RowBlock>
                  </div>
                  <div className="button-group">
                    <Button
                      typeButton="secondary"
                      buttonTitle="Prosseguir para formulário de cartão"
                      onClick={nextStepCart}
                    >
                      Prosseguir
                    </Button>
                    <Button
                      typeButton="secondary"
                      buttonTitle="retornar ao carrinho"
                      onClick={() => setStep(1)}
                    >
                      Retornar
                    </Button>
                  </div>
                </>
              )}
              {step === 3 && (
                <>
                  <h4>Pagamento - {priceFormater(getTotalPrice())}</h4>
                  <div>
                    <RowBlock>
                      <label htmlFor="cardName">Nome no cartão</label>
                      <input
                        id="cardName"
                        type="text"
                        name="paymentForm.cardName"
                        value={cartForm.values.paymentForm.cardName}
                        onChange={cartForm.handleChange}
                        onBlur={cartForm.handleBlur}
                      />
                    </RowBlock>
                    <RowBlock inputRowType="grid">
                      <div>
                        <label htmlFor="cardNumber">Número do cartão</label>
                        <input
                          id="cardNumber"
                          type="text"
                          name="paymentForm.cardNumber"
                          value={cartForm.values.paymentForm.cardNumber}
                          onChange={cartForm.handleChange}
                          onBlur={cartForm.handleBlur}
                        />
                      </div>
                      <div>
                        <label htmlFor="cvv">CVV</label>
                        <input
                          id="cvv"
                          type="text"
                          name="paymentForm.cvv"
                          value={cartForm.values.paymentForm.cvv}
                          onChange={cartForm.handleChange}
                          onBlur={cartForm.handleBlur}
                        />
                      </div>
                    </RowBlock>
                    <RowBlock inputRowType="double">
                      <div>
                        <label htmlFor="expireMonth">Mês de vencimento</label>
                        <input
                          id="expireMonth"
                          type="text"
                          name="paymentForm.expireMonth"
                          value={cartForm.values.paymentForm.expireMonth}
                          onChange={cartForm.handleChange}
                          onBlur={cartForm.handleBlur}
                        />
                      </div>
                      <div>
                        <label htmlFor="expireYear">Ano de vencimento</label>
                        <input
                          id="expireYear"
                          type="text"
                          name="paymentForm.expireYear"
                          value={cartForm.values.paymentForm.expireYear}
                          onChange={cartForm.handleChange}
                          onBlur={cartForm.handleBlur}
                        />
                      </div>
                    </RowBlock>
                  </div>
                  <div className="button-group">
                    <Button
                      typeButton="secondary"
                      buttonTitle="Prosseguir para resposta do pedido"
                      onClick={nextStepCart}
                    >
                      Finalizar pagamento
                    </Button>
                    <Button
                      typeButton="secondary"
                      buttonTitle="retornar ao carrinho"
                      onClick={() => setStep(1)}
                    >
                      Retornar
                    </Button>
                  </div>
                </>
              )}
            </form>
          </FormContainer>
          {step === 4 && isSuccess && (
            <FinishedOrder>
              <h4>Pedido realizado - {data.orderId}</h4>
              <div>
                <p>
                  Estamos felizes em informar que seu pedido já está em processo de preparação e, em
                  breve, será entregue no endereço fornecido.
                </p>
                <p>
                  Gostaríamos de ressaltar que nossos entregadores não estão autorizados a realizar
                  cobranças extras.
                </p>
                <p>
                  Lembre-se da importância de higienizar as mãos após o recebimento do pedido,
                  garantindo assim sua segurança e bem-estar durante a refeição.
                </p>
                <p>
                  Esperamos que desfrute de uma deliciosa e agradável experiência gastronômica. Bom
                  apetite!
                </p>
              </div>
              <Button
                typeButton="secondary"
                buttonTitle="Concluir compra"
                onClick={() => setStep(1)}
              >
                Concluir
              </Button>
            </FinishedOrder>
          )}
        </CartSidebar>
      </CartContainer>
    </>
  );
};

export default Cart;
