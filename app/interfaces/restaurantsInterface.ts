import { ICategory } from "./categoryInterface";
import { IDish } from "./dishInterface";

export interface IRestaurants {
  _id: string;
  name: string;
  short_description: string;
  image: IImage;
  lat: number | null;
  long: number | null;
  address: string;
  rating: number | null;
  type: ICategory | null;
  dishes: IDish[];
}

export interface IImage {
  _type: string;
  asset: {
    _ref: string;
    _type: string;
  };
}
