import { useDispatch, useSelector } from "react-redux";
import { priceFormater } from "../../utils/priceFormater";
import { Button } from "../button";
import { BuyInfos, CartContainer, CartItem, CartSidebar } from "./style";
import { RootReducer } from "../../store";
import { closeCart, removeFromCart } from "../../store/reducers/cart-reducer";

const Cart = () => {
  const { isOpen, food } = useSelector((state: RootReducer) => state.cart);

  const dispatch = useDispatch();

  const handleCloseCart = () => {
    dispatch(closeCart());
  };

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
      <CartContainer onClick={handleCloseCart} className={isOpen ? "is-open" : ""}>
        <CartSidebar>
          {food.map((item) => (
            <ul>
              <CartItem>
                <img src={item.foto} alt={item.descricao} />
                <div>
                  <h4>{item.nome}</h4>
                  <p>{priceFormater(item.preco)}</p>
                </div>
                <button type="button" onClick={() => handleRemoveItem(item.id)} />
              </CartItem>
            </ul>
          ))}
          <BuyInfos>
            <h4>Valor Total</h4>
            <h4>{priceFormater(getTotalPrice())}</h4>
          </BuyInfos>
          <Button typeButton="secondary" buttonTitle="Prosseguir para comprar" to="/">
            Comprar
          </Button>
        </CartSidebar>
      </CartContainer>
    </>
  );
};

export default Cart;
