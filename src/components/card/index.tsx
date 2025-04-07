import { CardTag } from "../tag";
import { CardContainer, CardHeader } from "./style";

import estrela from "../../public/icons/estrela.png";

export type FoodCardProps = {
  foodName: string;
  tag: string[];
  description: string;
  image: string;
  rating: string;
};

export const FoodCard = ({
  foodName,
  tag,
  description,
  image,
  rating,
}: FoodCardProps) => (
  <CardContainer>
    <CardHeader image={image}>
      {tag.map((tag) => (
        <CardTag key={tag}>{tag}</CardTag>
      ))}
    </CardHeader>
    <div>
      <div>
        <h3>{foodName}</h3>
        <div>
          <h3>{rating}</h3>
          <img src={estrela} alt="Classificação" />
        </div>
      </div>
      <p>{description}</p>
      <button>Saiba mais</button>
    </div>
  </CardContainer>
);
