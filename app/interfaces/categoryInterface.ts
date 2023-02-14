import { IImage } from "./restaurantsInterface";

export interface ICategory {
  _id: string;
  name: string;
  short_description: string;
  image: IImage;
}
