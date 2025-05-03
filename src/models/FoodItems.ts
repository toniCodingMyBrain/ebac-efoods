import { Food } from "./Food";

import sushi from "../public/assets/sushi.png";
import pizza from "../public/assets/pizza.png";
import spagetti from "../public/assets/spagetti.png";

export const FoodItems: Food[] = [
  {
    id: 1,
    foodName: "Hioki Sushi",
    tag: ["Destaque da semana", "Japonesa"],
    description:
      "Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!",
    image: sushi,
    rating: "4.9",
  },
  {
    id: 2,
    foodName: "La Dolce Vita Trattoria",
    tag: ["Italiana"],
    description:
      "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
    image: spagetti,
    rating: "4.6",
  },
  {
    id: 3,
    foodName: "Pizza Margueritta",
    tag: ["Italiana", "Mais famosa"],
    description:
      "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
    image: pizza,
    rating: "4.6",
  },
  {
    id: 1,
    foodName: "Hioki Sushi",
    tag: ["Destaque da semana", "Japonesa"],
    description:
      "Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!",
    image: sushi,
    rating: "4.9",
  },
  {
    id: 2,
    foodName: "La Dolce Vita Trattoria",
    tag: ["Italiana"],
    description:
      "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
    image: spagetti,
    rating: "4.6",
  },
  {
    id: 3,
    foodName: "Pizza Margueritta",
    tag: ["Italiana", "Mais famosa"],
    description:
      "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
    image: pizza,
    rating: "4.6",
  },
];
