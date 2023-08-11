import { ICarImage } from "./icarimage";
import { IVendor } from "./ivendor";

export interface Icar {
    car_id: number;
    location: string;
    available_time: Date;
    price: number;
    car_type: string;
    fuel_type: string;
    vendor: IVendor;
    make: string;
    model: string;
    mileage: number;
    status: string;
    candition: string;
    car_images: ICarImage[]; 
    ordertimes: number;
    lat: number;
    lng: number;
}
