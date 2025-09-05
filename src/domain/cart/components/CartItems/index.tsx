import { useDispatch, useSelector } from "react-redux";
import { Button } from "../../../../components/layout/button";
import { priceFormatter } from "../../../../utils/priceFormatter";
import { removeFromCart } from "../../../../store/reducers/cart-reducer";
import * as S from "../Cart/style";
import { RootReducer } from "../../../../store";
import { getTotalPrice } from "../../../../utils/get-total-price";

type Props = {
  nextStepCart: () => void;
};

export const CartItemsComponent = ({ nextStepCart }: Props) => {
  const { food } = useSelector((state: RootReducer) => state.cart);
  const dispatch = useDispatch();

  const handleRemoveItem = (id: number) => {
    dispatch(removeFromCart(id));
  };

  return (
    <>
      <ul>
        {food.map((item) => (
          <S.CartItem key={item.id}>
            <img src={item.foto} alt={item.descricao} />
            <div>
              <h4>{item.nome}</h4>
              <p>{priceFormatter(item.preco)}</p>
            </div>
            <button type="button" onClick={() => handleRemoveItem(item.id)} />
          </S.CartItem>
        ))}
      </ul>
      <S.BuyInfos>
        <h4>Valor Total</h4>
        <h4>{priceFormatter(getTotalPrice(food))}</h4>
      </S.BuyInfos>
      <Button typeButton="secondary" buttonTitle="Prosseguir para comprar" onClick={nextStepCart}>
        Comprar
      </Button>
    </>
  );
};
