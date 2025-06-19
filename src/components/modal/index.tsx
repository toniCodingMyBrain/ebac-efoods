import { Button } from "../button";
import { CardDescription, CardTitle } from "../card/style";
import { CloseButton, ModalContainer, ModalCard, ModalLayout } from "./style";
import close from "../../public/icons/close.png";
import { Food } from "../../services/restaurants-types";
import { useDispatch } from "react-redux";
import { closeModal } from "../../store/reducers/modal-reducer";

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
  //if (!isOpen || !selectedFood) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.classList.contains("modal-backdrop")) {
      dispatch(closeModal());
    }
  };

  const formatedPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(Number(selectedFood.preco));

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
                  <Button typeButton="secondary" buttonTitle="Adicionar ao carrinho">
                    {`Adicionar ao carrinho - ${formatedPrice}`}
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
