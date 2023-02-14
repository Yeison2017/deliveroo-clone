import { ICategory } from "./categoryInterface";

export interface IRestaurants {
  _id: string;
  name: string;
  short_description: string;
  image: IImage;
  lat: number;
  long: number;
  address: string;
  rating: number;
  type: ICategory;
  dishes: string[];
}

export interface IImage {
  _type: string;
  asset: {
    _ref: string;
    _type: string;
  };
}
