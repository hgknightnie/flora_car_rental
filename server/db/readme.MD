# Get all cars
http://localhost:3000/cars

# Sort
http://localhost:3000/cars?order=price&direction=desc

# Filter
http://localhost:3000/cars?direction=desc&order=price&make=toyota&car_type=sedan&fuel_type=gasoline&price=34|50

# Get specific car
http://localhost:3000/cars/3

# Add a car
## method: post
http://localhost:3000/cars
```Bulk Edit
location:7652 26 Ave SW
price:45
car_type:truck
fuel_type:gasoline
vendor_id:1
make:Ford
model:Mustang
mileage:35001
status:avaliable
condition:The Ford Mustang is an iconic American muscle car that combines classic design with powerful performance. With its distinct style and robust engines, the Mustang delivers thrilling acceleration and a true sense of driving excitement.
```
# Update a car
## method: patch
http://localhost:3000/cars/3
```Bulk Edit
mileage:21000
status:booked
available_time:2023-8-3 12:01
```

# Delete a car
## method: delete
http://localhost:3000/cars/3

# Vendor
http://localhost:3000/vendors/1

# Customer
http://localhost:3000/customers/1

# Order
http://localhost:3000/orders/1
```