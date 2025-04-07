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
};

export const FoodCard = ({
  foodName,
  tag,
  description,
  image,
  rating,
  type,
}: FoodCardProps) => {
  if (type === "home") {
    return (
      <CardContainer type={type}>
        <CardHeader image={image} type={type}>
          {tag.map((tag) => (
            <CardTag key={tag}>{tag}</CardTag>
          ))}
        </CardHeader>
        <CardBody>
          <CardTitle>
            <h3>{foodName}</h3>
            <CardRating>
              <h3>{rating}</h3>
              <img src={estrela} alt="Classificação" />
            </CardRating>
          </CardTitle>
          <CardDescription>{description}</CardDescription>
          <Button buttonTitle="Saiba mais sobre esta incrível iguaria" to="#">
            Saiba mais
          </Button>
        </CardBody>
      </CardContainer>
    );
  } else {
    return (
      <CardContainer type={type}>
        <CardHeader type={type} image={image}>
          
        </CardHeader>
        <CardBody>
          <CardTitle>
            <h3>{foodName}</h3>
            <CardRating>
              <h3>{rating}</h3>
              <img src={estrela} alt="Classificação" />
            </CardRating>
          </CardTitle>
          <CardDescription>{description}</CardDescription>
          <Button buttonTitle="Saiba mais sobre esta incrível iguaria" to="#">
            Saiba mais
          </Button>
        </CardBody>
      </CardContainer>
    );
  }
};
