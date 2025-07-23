import { useDispatch, useSelector } from "react-redux";

import { CartContainer, CartSidebar } from "./style";
import { RootReducer } from "../../store";
import { closeCart } from "../../store/reducers/cart-reducer";
import { CartProducts } from "../cart-products";
import { StepAddressForm } from "../form/addressForm";
import { StepPaymentForm } from "../form/paymentForm";
import { StepSuccessForm } from "../form/successForm";
import { useEffect, useRef } from "react";

const Cart = () => {
  const { isOpen, checkoutState } = useSelector(
    (state: RootReducer) => state.persistedReducer.cart
  );
  const { step } = checkoutState;
  const dispatch = useDispatch();

  const cartRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleOutsideClick(event: MouseEvent) {
      if (cartRef.current && !cartRef.current.contains(event.target as Node)) {
        dispatch(closeCart());
      }
    }

    if (isOpen === true) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen, dispatch]);

  return (
    <>
      <CartContainer className={isOpen ? "is-open" : ""}>
        <CartSidebar ref={cartRef}>
          {step === 1 && <CartProducts />}
          {step === 2 && <StepAddressForm />}
          {step === 3 && <StepPaymentForm />}
          {step === 4 && <StepSuccessForm />}
        </CartSidebar>
      </CartContainer>
    </>
  );
};

export default Cart;
