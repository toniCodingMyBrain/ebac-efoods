import useRestaurantsContext from "../../api/context/use-restaurants-context";
import { Button } from "../button";
import { CardDescription, CardTitle } from "../card/style";
import { CloseButton, ModalContainer, ModalCard, ModalLayout } from "./style";
import close from "../../public/icons/close.png";

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

  const formatedPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(Number(selectedRestaurantFood.preco));

  return (
    <>
      <ModalContainer>
        <div className="modal-backdrop" onClick={handleBackdropClick}>
          <div className="container">
            <ModalCard>
              <CloseButton className="close-button" onClick={closeModal}>
                <img className="close-button" src={close} alt="fechar modal" />
              </CloseButton>
              <ModalLayout>
                <div className="img-container">
                  <img
                    src={selectedRestaurantFood.foto}
                    alt={selectedRestaurantFood.nome}
                  />
                </div>
                <div className="content">
                  <CardTitle type="modal">
                    {selectedRestaurantFood.nome}
                  </CardTitle>
                  <CardDescription type="modal">
                    {selectedRestaurantFood.descricao}
                  </CardDescription>
                  <CardDescription type="modal">
                    {`Serve: ${selectedRestaurantFood.porcao}.`}
                  </CardDescription>
                  <Button
                    typeButton="secondary"
                    buttonTitle="Adicionar ao carrinho"
                  >
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
