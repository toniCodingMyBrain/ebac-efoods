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
import { Button } from "../../layout/button";

export type FoodCardProps = {
  type: "home";
  foodId: number;
  foodName: string;
  destacado: boolean;
  tag: string[];
  description: string;
  image?: string;
  rating: string;
  to: string;
};

export const RestaurantCard = ({
  foodName,
  tag,
  description,
  image,
  rating,
  type,
  to,
}: FoodCardProps) => {
  return (
    <CardContainer type={type}>
      <CardHeader image={image} type={type}>
        {tag.map((tag) => (
          <CardTag key={tag}>{tag}</CardTag>
        ))}
      </CardHeader>
      <CardBody type={type}>
        <div className="info-container">
          <CardTitle type={type}>
            <h3>{foodName}</h3>
            <CardRating>
              <h3>{rating}</h3>
              <img src={estrela} alt="Classificação" />
            </CardRating>
          </CardTitle>
          <CardDescription type={type}>{description}</CardDescription>
        </div>
        <div className="btn-home-card">
          <Button typeButton="primary" to={to} buttonTitle="Saiba mais sobre esta incrível iguaria">
            Saiba mais
          </Button>
        </div>
      </CardBody>
    </CardContainer>
  );
};
