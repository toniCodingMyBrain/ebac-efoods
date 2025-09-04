import { useDispatch } from "react-redux";
import { Button } from "../../../../components/layout/button";
import * as S from "../Cart/style";
import { closeCart, resetCheckout } from "../../../../store/reducers/cart-reducer";
import { useNavigate } from "react-router-dom";

type Props = {
  orderId: string;
};

export const OrderConfirmation = ({ orderId }: Props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAfterConcludePurchaseClick = () => {
    dispatch(resetCheckout());
    dispatch(closeCart());
    //! é preciso colocar o replace por algum motivo, ele simplesmente substitui a rota.
    navigate("/", { replace: true });
  };

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
      <Button
        typeButton="secondary"
        buttonTitle="Concluir compra"
        onClick={handleAfterConcludePurchaseClick}
        to="/"
      >
        Concluir
      </Button>
    </S.FinishedOrder>
  );
};
