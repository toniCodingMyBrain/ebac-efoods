import useRestaurantsContext from "../../api/context/use-restaurants-context";
import { Cardapio } from "../../api/get-restaurants";
import { Button } from "../button";
import {
  CardBody,
  CardContainer,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../card/style";
import Modal from "../modal";
import { List } from "../restaurantList/style";

type FoodListProps = {
  type: "foodPage";
  cardapio: Cardapio[];
};

const FoodList = ({ type, cardapio }: FoodListProps) => {
  const { openModal, isModalOpen } = useRestaurantsContext();

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
              <CardDescription type={type}>
                {restaurantFood.descricao}
              </CardDescription>
              <Button
                typeButton="secondary"
                buttonTitle="Adicionar ao carrinho"
                onClick={() => openModal(restaurantFood)}
              >
                Adicionar ao carrinho
              </Button>
            </CardBody>
            {isModalOpen && <Modal isOpen={isModalOpen} />}
          </CardContainer>
        ))}
      </List>
    </>
  );
};

export default FoodList;
