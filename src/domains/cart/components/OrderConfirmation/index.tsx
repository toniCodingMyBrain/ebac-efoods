import { Button } from "../../../../components/layout/button";
import * as S from "../cart/style";

type Props = {
  orderId: string;
  setStep: (step: number) => void;
};

export const OrderConfirmation = ({ orderId, setStep }: Props) => {
  return (
    <S.FinishedOrder>
      <h4>Pedido realizado - {orderId}</h4>
      <div>
        <p>
          Estamos felizes em informar que seu pedido já está em processo de preparação e, em breve,
          será entregue no endereço fornecido.
        </p>
        <p>
          Gostaríamos de ressaltar que nossos entregadores não estão autorizados a realizar
          cobranças extras.
        </p>
        <p>
          Lembre-se da importância de higienizar as mãos após o recebimento do pedido, garantindo
          assim sua segurança e bem-estar durante a refeição.
        </p>
        <p>
          Esperamos que desfrute de uma deliciosa e agradável experiência gastronômica. Bom apetite!
        </p>
      </div>
      <Button typeButton="secondary" buttonTitle="Concluir compra" onClick={() => setStep(1)}>
        Concluir
      </Button>
    </S.FinishedOrder>
  );
};
