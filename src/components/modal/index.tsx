import useRestaurantsContext from "../../api/context/use-restaurants-context";
import { Button } from "../button";
import { CardDescription, CardTitle } from "../card/style";
import { CloseButton, ModalContainer, ModalCard, ModalLayout } from "./style";

type ModalProps = {
  isOpen: boolean;
};

export default function Modal({ isOpen }: ModalProps) {
  const { closeModal, selectedRestaurantFood } = useRestaurantsContext();

  if (!isOpen || !selectedRestaurantFood) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.classList.contains("modal-backdrop")) {
      closeModal();
    }
  };

  return (
    <>
      <ModalContainer>
        <div className="modal-backdrop" onClick={handleBackdropClick}>
          <div className="container">
            <ModalCard>
              <CloseButton className="close-button" onClick={closeModal}>
                X
              </CloseButton>
              <ModalLayout>
                <div className="img-container">
                  <img src={selectedRestaurantFood.foto} alt="" />
                </div>
                <div className="content">
                  <CardTitle type="modal">
                    {selectedRestaurantFood.nome}
                  </CardTitle>
                  <CardDescription type="modal">
                    {selectedRestaurantFood.descricao}
                  </CardDescription>
                  <CardDescription type="modal">
                    {selectedRestaurantFood.porcao}
                  </CardDescription>
                  <Button
                    typeButton="secondary"
                    buttonTitle="Adicionar ao carrinho"
                  >
                    Adicionar ao carrinho
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
