import { CardTag } from "../tag";
import {
  CardTitle,
  CardContainer,
  CardHeader,
  CardDescription,
  CardBody,
  CardRating,
} from "./style";

import estrela from "../../public/icons/estrela.png";
import { Button } from "../button";

export type FoodCardProps = {
  type: "home" | "foodPage";
  foodName: string;
  tag: string[];
  description: string;
  image?: string;
  rating: string;
  to: string;
};

export const FoodCard = ({
  foodName,
  tag,
  description,
  image,
  rating,
  type,
  to,
}: FoodCardProps) => {
  if (type === "home") {
    return (
      <CardContainer type={type}>
        <CardHeader image={image} type={type}>
          {tag.map((tag) => (
            <CardTag key={tag}>{tag}</CardTag>
          ))}
        </CardHeader>
        <CardBody type={type}>
          <CardTitle type={type}>
            <h3>{foodName}</h3>
            <CardRating>
              <h3>{rating}</h3>
              <img src={estrela} alt="Classificação" />
            </CardRating>
          </CardTitle>
          <CardDescription type={type}>{description}</CardDescription>
          <div className="btn-home-card">
            <Button
              typeButton="primary"
              to={to}
              buttonTitle="Saiba mais sobre esta incrível iguaria"
            >
              Saiba mais
            </Button>
          </div>
        </CardBody>
      </CardContainer>
    );
  } else {
    return (
      <CardContainer type={type}>
        <CardHeader type={type} image={image}></CardHeader>
        <CardBody type={type}>
          <CardTitle type={type}>
            <h3>{foodName}</h3>
          </CardTitle>
          <CardDescription type={type}>{description}</CardDescription>

          <Button
            typeButton="secondary"
            buttonTitle="Adicionar ao carrinho"
            to="/"
          >
            Adicionar ao carrinho
          </Button>
        </CardBody>
      </CardContainer>
    );
  }
};
