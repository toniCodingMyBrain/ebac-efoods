import { Button } from "../../layout/button";
import { CardDescription, CardTitle } from "../card/style";
import { CloseButton, ModalContainer, ModalCard, ModalLayout } from "./style";
import close from "../../public/icons/close.png";
import { Food } from "../../../services/models/restaurants-types";
import { useDispatch } from "react-redux";
import { closeModal } from "../../../store/reducers/modal-reducer";
import { priceFormater } from "../../../utils/priceFormater";
import { addToCart, openCart } from "../../../store/reducers/cart-reducer";

type ModalProps = {
  isOpen: boolean;
  selectedFood: Food;
};

export default function Modal({ selectedFood }: ModalProps) {
  //const { closeModal, selectedRestaurantFood } = useRestaurantsContext();

  const dispatch = useDispatch();

  const handleCloseModalClick = () => {
    dispatch(closeModal());
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.classList.contains("modal-backdrop")) {
      dispatch(closeModal());
    }
  };

  const handleAddToCart = (food: Food) => {
    dispatch(addToCart(food));
    dispatch(openCart());
    dispatch(closeModal());
  };

  return (
    <>
      <ModalContainer>
        <div className="modal-backdrop" onClick={handleBackdropClick}>
          <div className="container">
            <ModalCard>
              <CloseButton className="close-button" onClick={handleCloseModalClick}>
                <img className="close-button" src={close} alt="fechar modal" />
              </CloseButton>
              <ModalLayout>
                <div className="img-container">
                  <img src={selectedFood.foto} alt={selectedFood.nome} />
                </div>
                <div className="content">
                  <CardTitle type="modal">{selectedFood.nome}</CardTitle>
                  <CardDescription type="modal">{selectedFood.descricao}</CardDescription>
                  <CardDescription type="modal">{`Serve: ${selectedFood.porcao}.`}</CardDescription>
                  <Button
                    typeButton="secondary"
                    buttonTitle="Adicionar ao carrinho"
                    onClick={() => handleAddToCart(selectedFood)}
                  >
                    {`Adicionar ao carrinho - ${priceFormater(selectedFood.preco)}`}
                  </Button>
                </div>
              </ModalLayout>
            </ModalCard>
          </div>
        </div>
      </ModalContainer>
    </>
  );
}
