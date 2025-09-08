import { useFormik } from "formik";
import { useSelector } from "react-redux";
import { Button } from "../../../../components/layout/button";
import { priceFormatter } from "../../../../utils/priceFormatter";
import * as S from "../Cart/style";
import { RootReducer } from "../../../../store";
import { getTotalPrice } from "../../../../utils/get-total-price";
import InputMask from "react-input-mask";

type Props = {
  cartForm: ReturnType<typeof useFormik<CartFormValues>>;
  nextStepCart: () => void;
  handleReturnClick: () => void;
  checkInputHasError: (fieldName: string) => boolean;
};

export const PaymentForm = ({
  cartForm,
  nextStepCart,
  checkInputHasError,
  handleReturnClick,
}: Props) => {
  const { food } = useSelector((state: RootReducer) => state.cart);

  return (
    <>
      <h4>Pagamento - {priceFormatter(getTotalPrice(food))}</h4>
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
            className={checkInputHasError("payment.card.name") ? "error" : ""}
          />
        </S.RowBlock>
        <S.RowBlock inputRowType="grid">
          <div>
            <label htmlFor="number">Número do cartão</label>
            <InputMask
              id="number"
              type="text"
              name="payment.card.number"
              value={cartForm.values.payment.card.number}
              onChange={cartForm.handleChange}
              onBlur={cartForm.handleBlur}
              className={checkInputHasError("payment.card.number") ? "error" : ""}
              mask="9999-9999-9999-9999"
            />
          </div>
          <div>
            <label htmlFor="code">CVV</label>
            <InputMask
              id="code"
              type="text"
              name="payment.card.code"
              value={cartForm.values.payment.card.code}
              onChange={cartForm.handleChange}
              onBlur={cartForm.handleBlur}
              className={checkInputHasError("payment.card.code") ? "error" : ""}
              mask="999"
            />
          </div>
        </S.RowBlock>
        <S.RowBlock inputRowType="double">
          <div>
            <label htmlFor="month">Mês de vencimento</label>
            <InputMask
              id="month"
              type="text"
              name="payment.card.expires.month"
              value={cartForm.values.payment.card.expires.month}
              onChange={cartForm.handleChange}
              onBlur={cartForm.handleBlur}
              className={checkInputHasError("payment.card.expires.month") ? "error" : ""}
              mask="99"
            />
          </div>
          <div>
            <label htmlFor="year">Ano de vencimento</label>
            <InputMask
              id="year"
              type="text"
              name="payment.card.expires.year"
              value={cartForm.values.payment.card.expires.year}
              onChange={cartForm.handleChange}
              onBlur={cartForm.handleBlur}
              className={checkInputHasError("payment.card.expires.year") ? "error" : ""}
              mask="9999"
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
          onClick={handleReturnClick}
        >
          Retornar
        </Button>
      </div>
    </>
  );
};
