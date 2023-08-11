// define the data structure for location data used within the application
// declare and subsequently use the country locations data for display in the rendered Google Map instance

import { Icar } from "./icar";

export interface ICityLocation {
    city: string;
    lat: number;
    lng: number;
    description: string;
    cars: Icar[];
}

export interface ICarLocation {
    name: string;
    lat: number;
    lng: number;
    description: string;
    make: string;
}