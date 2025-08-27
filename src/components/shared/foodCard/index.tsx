import { Food } from "../../../services/models/restaurants-types";
import { Button } from "../../layout/button";
import * as S from "../../ui/card/style";
import Modal from "../../ui/modal";
import { useDispatch, useSelector } from "react-redux";
import { openModal, selectFood } from "../../../store/reducers/modal-reducer";
import { RootReducer } from "../../../store";
import { List } from "../restaurantList/style";

type FoodListProps = {
  type: "foodPage";
  cardapio: Food[];
};

const FoodList = ({ type, cardapio }: FoodListProps) => {
  const { isOpen: isModalOpen, food: selectedFood } = useSelector(
    (state: RootReducer) => state.modal
  );

  const dispatch = useDispatch();

  const handleOpenModalClick = (selectedFood: Food) => {
    dispatch(openModal());
    dispatch(selectFood(selectedFood));
  };

  return (
    <>
      <List type={type}>
        {cardapio.map((restaurantFood) => (
          <S.CardContainer type={type}>
            <S.CardHeader type={type} image={restaurantFood.foto}></S.CardHeader>
            <S.CardBody type={type}>
              <S.CardTitle type={type}>
                <h3>{restaurantFood.nome}</h3>
              </S.CardTitle>
              <S.CardDescription type={type}>{restaurantFood.descricao}</S.CardDescription>
              <Button
                typeButton="secondary"
                buttonTitle="Adicionar ao carrinho"
                onClick={() => handleOpenModalClick(restaurantFood)}
              >
                Adicionar ao carrinho
              </Button>
            </S.CardBody>
            {isModalOpen && <Modal isOpen={isModalOpen} selectedFood={selectedFood} />}
          </S.CardContainer>
        ))}
      </List>
    </>
  );
};

export default FoodList;
