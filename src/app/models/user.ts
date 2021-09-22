import { ILocation } from "./location";
import { IOrder } from "./order";

export interface IUser {
    id: string,
    name:string,
    surname: string,
    mail:string,
    imageUrl: string,
    location: ILocation,
    orders: IOrder[]
}