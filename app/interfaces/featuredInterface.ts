import { IRestaurants } from "./restaurantsInterface";
export interface IFeatured {
  _id: string;
  name: string;
  short_description: string;
  restaurant: IRestaurants;
}
