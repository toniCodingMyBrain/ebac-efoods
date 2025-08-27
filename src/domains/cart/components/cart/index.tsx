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
  const [purchase, { data, isSuccess }] = usePurchaseMutation();
  const { isOpen, food } = useSelector((state: RootReducer) => state.persistedReducer.cart);
  const dispatch = useDispatch();

  /*console.log(data);
  console.log(isSuccess);
  console.log(status);
   console.log(); */

  const cartForm = useFormik({
    initialValues: {
      delivery: {
        receiver: "",
        description: "",
        city: "",
        cep: "",
        number: "",
        complement: "",
      },
      payment: {
        cardName: "",
        cardNumber: "",
        cvv: "",
        expiresMonth: "",
        expiresYear: "",
      },
    },
    validationSchema: yup.object({
      delivery: deliverySchemaValidation,
      payment: paymentSchemaValidation,
    }),
    onSubmit: (values) =>
      purchase({
        products: food.map((item) => ({
          id: item.id,
          price: Number(item.preco),
        })),
        delivery: {
          receiver: values.delivery.receiver,
          address: {
            description: values.delivery.description,
            city: values.delivery.city,
            zipCode: values.delivery.cep,
            number: Number(values.delivery.number),
            complement: values.delivery.complement,
          },
        },
        payment: {
          card: {
            name: values.payment.cardName,
            number: values.payment.cardNumber,
            code: Number(values.payment.cvv),
            expires: {
              month: Number(values.payment.expiresMonth),
              year: Number(values.payment.expiresYear),
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
      cartForm.values.delivery.description.trim().length > 0 &&
      cartForm.values.delivery.receiver.trim().length > 0 &&
      cartForm.values.delivery.city.trim().length > 0 &&
      cartForm.values.delivery.cep.trim().length > 0 &&
      cartForm.values.delivery.number.trim().length > 0 &&
      cartForm.values.delivery.complement.trim().length > 0
    ) {
      setStep(3);
    }
    if (
      step === 3 &&
      cartForm.values.payment.cardName.trim().length > 0 &&
      cartForm.values.payment.cardNumber.trim().length > 0 &&
      cartForm.values.payment.cvv.trim().length > 0 &&
      cartForm.values.payment.expiresMonth.trim().length > 0 &&
      cartForm.values.payment.expiresYear.trim().length > 0
    ) {
      console.log(cartForm.values);
      cartForm.handleSubmit();
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
                      <label htmlFor="receiver">Quem irá receber</label>
                      <input
                        id="receiver"
                        type="text"
                        name="delivery.receiver"
                        value={cartForm.values.delivery.receiver}
                        onChange={cartForm.handleChange}
                        onBlur={cartForm.handleBlur}
                      />
                    </RowBlock>
                    <RowBlock>
                      <label htmlFor="description">Endereço</label>
                      <input
                        id="description"
                        type="text"
                        name="delivery.description"
                        value={cartForm.values.delivery.description}
                        onChange={cartForm.handleChange}
                        onBlur={cartForm.handleBlur}
                      />
                    </RowBlock>
                    <RowBlock>
                      <label htmlFor="city">Cidade</label>
                      <input
                        id="city"
                        type="text"
                        name="delivery.city"
                        value={cartForm.values.delivery.city}
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
                          name="delivery.cep"
                          value={cartForm.values.delivery.cep}
                          onChange={cartForm.handleChange}
                          onBlur={cartForm.handleBlur}
                        />
                      </div>
                      <div>
                        <label htmlFor="number">Número</label>
                        <input
                          id="number"
                          type="text"
                          name="delivery.number"
                          value={cartForm.values.delivery.number}
                          onChange={cartForm.handleChange}
                          onBlur={cartForm.handleBlur}
                        />
                      </div>
                    </RowBlock>
                    <RowBlock>
                      <label htmlFor="complement">Complemento</label>
                      <input
                        id="complement"
                        type="text"
                        name="delivery.complement"
                        value={cartForm.values.delivery.complement}
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
                        name="payment.cardName"
                        value={cartForm.values.payment.cardName}
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
                          name="payment.cardNumber"
                          value={cartForm.values.payment.cardNumber}
                          onChange={cartForm.handleChange}
                          onBlur={cartForm.handleBlur}
                        />
                      </div>
                      <div>
                        <label htmlFor="cvv">CVV</label>
                        <input
                          id="cvv"
                          type="text"
                          name="payment.cvv"
                          value={cartForm.values.payment.cvv}
                          onChange={cartForm.handleChange}
                          onBlur={cartForm.handleBlur}
                        />
                      </div>
                    </RowBlock>
                    <RowBlock inputRowType="double">
                      <div>
                        <label htmlFor="expiresMonth">Mês de vencimento</label>
                        <input
                          id="expiresMonth"
                          type="text"
                          name="payment.expiresMonth"
                          value={cartForm.values.payment.expiresMonth}
                          onChange={cartForm.handleChange}
                          onBlur={cartForm.handleBlur}
                        />
                      </div>
                      <div>
                        <label htmlFor="expiresYear">Ano de vencimento</label>
                        <input
                          id="expiresYear"
                          type="text"
                          name="payment.expiresYear"
                          value={cartForm.values.payment.expiresYear}
                          onChange={cartForm.handleChange}
                          onBlur={cartForm.handleBlur}
                        />
                      </div>
                    </RowBlock>
                  </div>
                  <div className="button-group">
                    <Button
                      typeButton="secondary"
                      type="submit"
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
          {step === 4 && data && (
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
