// define the data structure for the Google Maps marker information
// used with Google Map marker related data
import { Icar } from "./icar";

export interface IMarkerEl {
    coordinate: ICoordinate;
    markerId: string;
    title: string;
    snippet: string;
    iconUrl:string;
    car: Icar;
}

export interface ICoordinate {
    lat: number;
    lng: number;
}