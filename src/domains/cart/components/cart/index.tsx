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

const Cart = () => {
  const cartForm = useFormik({
    initialValues: {
      fullName: "",
      address: "",
      city: "",
      cep: "",
      number: "",
      description: "",
      cardName: "",
      cardNumber: "",
      cvv: "",
      expireMonth: "",
      expireYear: "",
    },
    validationSchema: yup.object({
      delivery: deliverySchemaValidation,
      payment: paymentSchemaValidation,
    }),
    onSubmit: () => {},
  });

  const { isOpen, food } = useSelector((state: RootReducer) => state.persistedReducer.cart);
  const dispatch = useDispatch();
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
    setStep(2);
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
          {step === 2 && (
            <FormContainer>
              <h4>Entrega</h4>
              <form>
                <div>
                  <RowBlock>
                    <label htmlFor="fullName">Quem irá receber</label>
                    <input id="fullName" type="text" />
                  </RowBlock>
                  <RowBlock>
                    <label htmlFor="address">Endereço</label>
                    <input id="address" type="text" />
                  </RowBlock>
                  <RowBlock>
                    <label htmlFor="city">Cidade</label>
                    <input id="city" type="text" />
                  </RowBlock>
                  <RowBlock inputRowType="double">
                    <div>
                      <label htmlFor="cep">CEP</label>
                      <input id="cep" type="text" />
                    </div>
                    <div>
                      <label htmlFor="number">Número</label>
                      <input id="number" type="text" />
                    </div>
                  </RowBlock>
                  <RowBlock>
                    <label htmlFor="description">Complemento</label>
                    <input id="description" type="text" />
                  </RowBlock>
                </div>
                <div className="button-group">
                  <Button
                    typeButton="secondary"
                    buttonTitle="Prosseguir para formulário de cartão"
                    onClick={() => setStep(3)}
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
              </form>
            </FormContainer>
          )}
          {step === 3 && (
            <FormContainer>
              <h4>Pagamento - {priceFormater(getTotalPrice())}</h4>
              <form>
                <div>
                  <RowBlock>
                    <label htmlFor="cardName">Nome no cartão</label>
                    <input id="cardName" type="text" />
                  </RowBlock>
                  <RowBlock inputRowType="grid">
                    <div>
                      <label htmlFor="cardNumber">Número do cartão</label>
                      <input id="cardNumber" type="text" />
                    </div>
                    <div>
                      <label htmlFor="cvv">CVV</label>
                      <input id="cvv" type="text" />
                    </div>
                  </RowBlock>
                  <RowBlock inputRowType="double">
                    <div>
                      <label htmlFor="expireMonth">Mês de vencimento</label>
                      <input id="expireMonth" type="text" />
                    </div>
                    <div>
                      <label htmlFor="expireYear">Ano de vencimento</label>
                      <input id="expireYear" type="text" />
                    </div>
                  </RowBlock>
                </div>
                <div className="button-group">
                  <Button
                    typeButton="secondary"
                    buttonTitle="Prosseguir para resposta do pedido"
                    onClick={() => setStep(4)}
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
              </form>
            </FormContainer>
          )}
          {step === 4 && (
            <FinishedOrder>
              <h4>Pedido realizado - XXXXX</h4>
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
