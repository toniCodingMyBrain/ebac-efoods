import { CardTag } from "../tag";
import * as S from "./style";

import star from "../../../public/icons/star.png";
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
    <S.CardContainer type={type}>
      <S.CardHeader image={image} type={type}>
        {tag.map((tag) => (
          <CardTag key={tag}>{tag}</CardTag>
        ))}
      </S.CardHeader>
      <S.CardBody type={type}>
        <div className="info-container">
          <S.CardTitle type={type}>
            <h3>{foodName}</h3>
            <S.CardRating>
              <h3>{rating}</h3>
              <img src={star} alt="Classificação" />
            </S.CardRating>
          </S.CardTitle>
          <S.CardDescription type={type}>{description}</S.CardDescription>
        </div>
        <div className="btn-home-card">
          <Button typeButton="primary" to={to} buttonTitle="Saiba mais sobre esta incrível iguaria">
            Saiba mais
          </Button>
        </div>
      </S.CardBody>
    </S.CardContainer>
  );
};
