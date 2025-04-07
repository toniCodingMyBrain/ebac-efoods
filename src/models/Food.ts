export class Food {
  id: number;
  foodName: string;
  tag: string[];
  description: string;
  image: string;
  rating: string;

  constructor(
    id: number,
    foodName: string,
    tag: [],
    description: string,
    image: string,
    rating: string
  ) {
    this.id = id;
    this.foodName = foodName;
    this.tag = tag;
    this.description = description;
    this.image = image;
    this.rating = rating;
  }
}
