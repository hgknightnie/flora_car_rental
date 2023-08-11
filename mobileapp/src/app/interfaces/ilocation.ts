// define the data structure for location data used within the application
// declare and subsequently use the country locations data for display in the rendered Google Map instance

export interface ICityLocation {
    city: string;
    lat: number;
    lng: number;
    description: string;
    car_locations: Array<ICarLocation>;
}

export interface ICarLocation {
    name: string;
    lat: number;
    lng: number;
    description: string;
    make: string;
}