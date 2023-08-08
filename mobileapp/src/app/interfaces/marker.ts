// define the data structure for the Google Maps marker information
// used with Google Map marker related data

export interface MarkerEl {
    coordinate: Coordinate;
    markerId: string;
    title: string;
    snippet: string;
    iconUrl:string;
}

export interface Coordinate {
    lat: number;
    lng: number;
}