import { useFormik } from "formik";
import { useSelector } from "react-redux";
import { Button } from "../../../../components/layout/button";
import { priceFormater } from "../../../../utils/priceFormater";
import * as S from "../Cart/style";
import { RootReducer } from "../../../../store";

type Props = {
  cartForm: ReturnType<typeof useFormik<CartFormValues>>;
  nextStepCart: () => void;
  setStep: (step: number) => void;
};

export const PaymentForm = ({ cartForm, nextStepCart, setStep }: Props) => {
  const { food } = useSelector((state: RootReducer) => state.cart);

  const getTotalPrice = () => {
    return food.reduce((acumulator, nextPrice) => {
      return (acumulator += Number(nextPrice.preco));
    }, 0);
  };

  return (
    <>
      <h4>Pagamento - {priceFormater(getTotalPrice())}</h4>
      <div>
        <S.RowBlock>
          <label htmlFor="name">Nome no cartão</label>
          <input
            id="name"
            type="text"
            name="payment.card.name"
            value={cartForm.values.payment.card.name}
            onChange={cartForm.handleChange}
            onBlur={cartForm.handleBlur}
          />
        </S.RowBlock>
        <S.RowBlock inputRowType="grid">
          <div>
            <label htmlFor="number">Número do cartão</label>
            <input
              id="number"
              type="text"
              name="payment.card.number"
              value={cartForm.values.payment.card.number}
              onChange={cartForm.handleChange}
              onBlur={cartForm.handleBlur}
            />
          </div>
          <div>
            <label htmlFor="code">CVV</label>
            <input
              id="code"
              type="text"
              name="payment.card.code"
              value={cartForm.values.payment.card.code}
              onChange={cartForm.handleChange}
              onBlur={cartForm.handleBlur}
            />
          </div>
        </S.RowBlock>
        <S.RowBlock inputRowType="double">
          <div>
            <label htmlFor="month">Mês de vencimento</label>
            <input
              id="month"
              type="text"
              name="payment.card.expires.month"
              value={cartForm.values.payment.card.expires.month}
              onChange={cartForm.handleChange}
              onBlur={cartForm.handleBlur}
            />
          </div>
          <div>
            <label htmlFor="year">Ano de vencimento</label>
            <input
              id="year"
              type="text"
              name="payment.card.expires.year"
              value={cartForm.values.payment.card.expires.year}
              onChange={cartForm.handleChange}
              onBlur={cartForm.handleBlur}
            />
          </div>
        </S.RowBlock>
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
  );
};
