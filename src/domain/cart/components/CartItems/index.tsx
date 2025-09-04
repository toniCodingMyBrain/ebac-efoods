import { useDispatch, useSelector } from "react-redux";
import { Button } from "../../../../components/layout/button";
import { priceFormater } from "../../../../utils/priceFormater";
import { removeFromCart } from "../../../../store/reducers/cart-reducer";
import * as S from "../Cart/style";
import { RootReducer } from "../../../../store";

type Props = {
  nextStepCart: () => void;
};

export const CartItemsComponent = ({ nextStepCart }: Props) => {
  const { food } = useSelector((state: RootReducer) => state.cart);
  const dispatch = useDispatch();

  const handleRemoveItem = (id: number) => {
    dispatch(removeFromCart(id));
  };

  const getTotalPrice = () => {
    return food.reduce((acumulator, nextPrice) => {
      return (acumulator += Number(nextPrice.preco));
    }, 0);
  };

  return (
    <>
      <ul>
        {food.map((item) => (
          <S.CartItem key={item.id}>
            <img src={item.foto} alt={item.descricao} />
            <div>
              <h4>{item.nome}</h4>
              <p>{priceFormater(item.preco)}</p>
            </div>
            <button type="button" onClick={() => handleRemoveItem(item.id)} />
          </S.CartItem>
        ))}
      </ul>
      <S.BuyInfos>
        <h4>Valor Total</h4>
        <h4>{priceFormater(getTotalPrice())}</h4>
      </S.BuyInfos>
      <Button typeButton="secondary" buttonTitle="Prosseguir para comprar" onClick={nextStepCart}>
        Comprar
      </Button>
    </>
  );
};
