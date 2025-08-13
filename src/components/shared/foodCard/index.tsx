import { Food } from "../../../services/models/restaurants-types";
import { Button } from "../../layout/button";
import {
  CardBody,
  CardContainer,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../ui/card/style";
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
  // const { openModal, isModalOpen } = useRestaurantsContext();
  const { isOpen: isModalOpen, food: selectedFood } = useSelector(
    (state: RootReducer) => state.persistedReducer.modal
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
          <CardContainer type={type}>
            <CardHeader type={type} image={restaurantFood.foto}></CardHeader>
            <CardBody type={type}>
              <CardTitle type={type}>
                <h3>{restaurantFood.nome}</h3>
              </CardTitle>
              <CardDescription type={type}>{restaurantFood.descricao}</CardDescription>
              <Button
                typeButton="secondary"
                buttonTitle="Adicionar ao carrinho"
                onClick={() => handleOpenModalClick(restaurantFood)}
              >
                Adicionar ao carrinho
              </Button>
            </CardBody>
            {isModalOpen && <Modal isOpen={isModalOpen} selectedFood={selectedFood} />}
          </CardContainer>
        ))}
      </List>
    </>
  );
};

export default FoodList;
