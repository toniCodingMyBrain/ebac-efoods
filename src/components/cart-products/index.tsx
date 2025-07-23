import { useDispatch, useSelector } from "react-redux";
import { priceFormater } from "../../utils/priceFormater";
import { Button } from "../button";
import { BuyInfos, CartItem } from "../cart/style";
import { RootReducer } from "../../store";
import { removeFromCart, setStep } from "../../store/reducers/cart-reducer";

export const CartProducts = () => {
  const { food } = useSelector((state: RootReducer) => state.persistedReducer.cart);
  const dispatch = useDispatch();

  const handleRemoveItem = (id: number) => {
    dispatch(removeFromCart(id));
  };

  const getTotalPrice = () => {
    return food.reduce((acumulator, nextPrice) => {
      return (acumulator += Number(nextPrice.preco));
    }, 0);
  };

  const nextStepCart = () => {
    dispatch(setStep(2));
  };

  return (
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
      <Button typeButton="secondary" buttonTitle="Prosseguir para comprar" onClick={nextStepCart}>
        Comprar
      </Button>
    </>
  );
};
