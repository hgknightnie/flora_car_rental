// ordr interface
export interface Iorder {
	order_id: number,
    customer_id: number,
    car_id: number,
    pickup_location: string,
    pickup_date: Date,
    dropoff_location: string,
    dropoff_date: Date,
    total_price: number,
    mileage_limit:  number,
    order_date:Date
}
