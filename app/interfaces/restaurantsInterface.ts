import { ICategory } from "./categoryInterface";

export interface IRestaurants {
  _id: string;
  name: string;
  short_description: string;
  image: Image;
  lat: number;
  long: number;
  address: string;
  rating: number;
  type: ICategory;
  dishes: string[];
}

interface Image {
  _type: string;
  asset: {
    _ref: string;
    _type: string;
  };
}
