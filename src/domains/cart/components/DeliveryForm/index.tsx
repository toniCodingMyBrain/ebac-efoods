import { useFormik } from "formik";
import { Button } from "../../../../components/layout/button";
import * as S from "../cart/style";

type Props = {
  cartForm: ReturnType<typeof useFormik<CartFormValues>>;
  nextStepCart: () => void;
  setStep: (step: number) => void;
};

export const DeliveryForm = ({ cartForm, nextStepCart, setStep }: Props) => {
  return (
    <>
      <h4>Entrega</h4>
      <div>
        <S.RowBlock>
          <label htmlFor="receiver">Quem irá receber</label>
          <input
            id="receiver"
            type="text"
            name="delivery.receiver"
            value={cartForm.values.delivery.receiver}
            onChange={cartForm.handleChange}
            onBlur={cartForm.handleBlur}
          />
        </S.RowBlock>
        <S.RowBlock>
          <label htmlFor="description">Endereço</label>
          <input
            id="description"
            type="text"
            name="delivery.address.description"
            value={cartForm.values.delivery.address.description}
            onChange={cartForm.handleChange}
            onBlur={cartForm.handleBlur}
          />
        </S.RowBlock>
        <S.RowBlock>
          <label htmlFor="city">Cidade</label>
          <input
            id="city"
            type="text"
            name="delivery.address.city"
            value={cartForm.values.delivery.address.city}
            onChange={cartForm.handleChange}
            onBlur={cartForm.handleBlur}
          />
        </S.RowBlock>
        <S.RowBlock inputRowType="double">
          <div>
            <label htmlFor="cep">CEP</label>
            <input
              id="cep"
              type="text"
              name="delivery.address.zipCode"
              value={cartForm.values.delivery.address.zipCode}
              onChange={cartForm.handleChange}
              onBlur={cartForm.handleBlur}
            />
          </div>
          <div>
            <label htmlFor="number">Número</label>
            <input
              id="number"
              type="text"
              name="delivery.address.number"
              value={cartForm.values.delivery.address.number}
              onChange={cartForm.handleChange}
              onBlur={cartForm.handleBlur}
            />
          </div>
        </S.RowBlock>
        <S.RowBlock>
          <label htmlFor="complement">Complemento</label>
          <input
            id="complement"
            type="text"
            name="delivery.address.complement"
            value={cartForm.values.delivery.address.complement}
            onChange={cartForm.handleChange}
            onBlur={cartForm.handleBlur}
          />
        </S.RowBlock>
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
  );
};
