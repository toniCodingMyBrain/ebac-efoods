import { useDispatch, useSelector } from "react-redux";

import * as S from "./style";
import { RootReducer } from "../../../../store";
import { closeCart } from "../../../../store/reducers/cart-reducer";
import { useEffect, useRef, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { usePurchaseMutation } from "../../../../services/api";
import { CartItemsComponent } from "../CartItems";
import { DeliveryForm } from "../DeliveryForm";
import { PaymentForm } from "../PaymentForm";
import { OrderConfirmation } from "../OrderConfirmation";
import { deliverySchemaValidation } from "../../schemas/delivery-schema";
import { paymentSchemaValidation } from "../../schemas/payment-schema";

const Cart = () => {
  const [purchase, { data, isSuccess }] = usePurchaseMutation();
  const { isOpen, food, checkoutState } = useSelector((state: RootReducer) => state.cart);
  const dispatch = useDispatch();

  const cartForm = useFormik<CartFormValues>({
    initialValues: {
      delivery: {
        receiver: "",
        address: {
          description: "",
          city: "",
          zipCode: "",
          number: "",
          complement: "",
        },
      },
      payment: {
        card: {
          name: "",
          number: "",
          code: "",
          expires: {
            month: "",
            year: "",
          },
        },
      },
    },
    validationSchema: yup.object({
      delivery: deliverySchemaValidation,
      payment: paymentSchemaValidation,
    }),
    onSubmit: (values) =>
      purchase({
        products: checkoutState.products,
        /* food.map((item) => ({
          id: item.id,
          price: Number(item.preco),
        })) */ delivery: {
          receiver: values.delivery.receiver,
          address: {
            description: values.delivery.address.description,
            city: values.delivery.address.city,
            zipCode: values.delivery.address.zipCode,
            number: Number(values.delivery.address.number),
            complement: values.delivery.address.complement,
          },
        },
        payment: {
          card: {
            name: values.payment.card.name,
            number: values.payment.card.number,
            code: Number(values.payment.card.code),
            expires: {
              month: Number(values.payment.card.expires.month),
              year: Number(values.payment.card.expires.year),
            },
          },
        },
      }),
  });

  const [step, setStep] = useState(1);

  const nextStepCart = async () => {
    if (step === 1 && food.length > 0) {
      setStep(2);
    } else if (step === 2) {
      const deliveryErrors = await cartForm.validateForm();
      if (!deliveryErrors.delivery) {
        setStep(3);
      }
    }
    if (step === 3) {
      const paymentErrors = await cartForm.validateForm();
      if (!paymentErrors.payment) {
        cartForm.handleSubmit();
      }
    }
  };

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

  useEffect(() => {
    if (isSuccess) {
      setStep(4);
    }
  }, [isSuccess]);

  const renderStep = () => {
    switch (step) {
      case 1:
        return <CartItemsComponent nextStepCart={nextStepCart} />;
      case 2:
        return <DeliveryForm cartForm={cartForm} nextStepCart={nextStepCart} setStep={setStep} />;
      case 3:
        return <PaymentForm cartForm={cartForm} nextStepCart={nextStepCart} setStep={setStep} />;
      case 4:
        return data ? <OrderConfirmation orderId={data.orderId} /> : null;
      default:
        return null;
    }
  };

  return (
    <>
      <S.CartContainer className={isOpen ? "is-open" : ""}>
        <S.CartSidebar ref={cartRef}>
          <S.FormContainer>
            {food.length > 0 ? (
              <form onSubmit={cartForm.handleSubmit}>{renderStep()}</form>
            ) : (
              <div className="empty-cart">
                <h3>Oops... carrinho vazio</h3>
                <p>Adicione produtos para comprar ao carrinho.</p>
              </div>
            )}
          </S.FormContainer>
        </S.CartSidebar>
      </S.CartContainer>
    </>
  );
};

export default Cart;
