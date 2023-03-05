import { ICategory } from "./categoryInterface";

export interface IRestaurants {
  _id: string;
  name: string;
  short_description: string;
  image: IImage | null;
  lat: number | null;
  long: number | null;
  address: string;
  rating: number | null;
  type: ICategory | null;
  dishes: string[];
}

export interface IImage {
  _type: string;
  asset: {
    _ref: string;
    _type: string;
  };
}
