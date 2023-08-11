// define the data structure for the Google Maps marker information
// used with Google Map marker related data

export interface IMarkerEl {
    coordinate: ICoordinate;
    markerId: string;
    title: string;
    snippet: string;
    iconUrl:string;
}

export interface ICoordinate {
    lat: number;
    lng: number;
}