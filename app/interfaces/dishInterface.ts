import { IImage } from "./restaurantsInterface";

export interface IDish {
  _id: string;
  name: string;
  short_description: string;
  price: number;
  image: IImage;
}
