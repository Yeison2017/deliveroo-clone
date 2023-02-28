import { IImage } from "./restaurantsInterface";

export interface IDish {
  id: string;
  name: string;
  description: string;
  price: number;
  image: IImage;
}
