import { useFormik } from "formik";
import { useSelector } from "react-redux";
import { Button } from "../../../../components/layout/button";
import { priceFormatter } from "../../../../utils/priceFormatter";
import * as S from "../Cart/style";
import { RootReducer } from "../../../../store";
import { getTotalPrice } from "../../../../utils/get-total-price";
import { ChangeEvent, useState } from "react";
import { handleCardNumberMask } from "../../../../utils/card-number-mask";
import { handleCardCodeMask } from "../../../../utils/card-code-mask";
import { handleCardExpiresMask } from "../../../../utils/card-expires-mask";

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

  const [cardNumberValue, setCardNumberValue] = useState("");
  const [cardCodeValue, setCardCodeValue] = useState("");
  const [cardExpiresMonthValue, setCardExpiresMonthValue] = useState("");
  const [cardExpiresYearValue, setCardExpiresYearValue] = useState("");

  const handleCardNumberChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const { cleanValue, maskedValue } = handleCardNumberMask(value);
    cartForm.setFieldValue("payment.card.number", cleanValue);
    setCardNumberValue(maskedValue);
  };

  const handleCardCodeChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const { cleanValue, maskedValue } = handleCardCodeMask(value);
    cartForm.setFieldValue("payment.card.code", cleanValue);
    setCardCodeValue(maskedValue);
  };

  const handleCardExpiresMonthChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const { cleanValue, maskedValue } = handleCardExpiresMask(value, 2);
    cartForm.setFieldValue("payment.card.expires.month", cleanValue);
    setCardExpiresMonthValue(maskedValue);
  };

  const handleCardExpiresYearChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const { cleanValue, maskedValue } = handleCardExpiresMask(value, 4);
    cartForm.setFieldValue("payment.card.expires.year", cleanValue);
    setCardExpiresYearValue(maskedValue);
  };

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
            <input
              id="number"
              type="text"
              name="payment.card.number"
              placeholder="0000 0000 0000 0000"
              value={cardNumberValue}
              onChange={handleCardNumberChange}
              onBlur={cartForm.handleBlur}
              className={checkInputHasError("payment.card.number") ? "error" : ""}
            />
          </div>
          <div>
            <label htmlFor="code">CVV</label>
            <input
              id="code"
              type="text"
              name="payment.card.code"
              placeholder="000"
              value={cardCodeValue}
              onChange={handleCardCodeChange}
              onBlur={cartForm.handleBlur}
              className={checkInputHasError("payment.card.code") ? "error" : ""}
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
              placeholder="00"
              value={cardExpiresMonthValue}
              onChange={handleCardExpiresMonthChange}
              onBlur={cartForm.handleBlur}
              className={checkInputHasError("payment.card.expires.month") ? "error" : ""}
            />
          </div>
          <div>
            <label htmlFor="year">Ano de vencimento</label>
            <input
              id="year"
              type="text"
              name="payment.card.expires.year"
              placeholder="2025"
              value={cardExpiresYearValue}
              onChange={handleCardExpiresYearChange}
              onBlur={cartForm.handleBlur}
              className={checkInputHasError("payment.card.expires.year") ? "error" : ""}
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
