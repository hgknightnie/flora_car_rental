create table cars (
	car_id int not null auto_increment,
	location varchar(100) not null,
	available_time date,
	price float not null,
	car_type enum('sedan', 'truck', 'suv', 'van') not null default 'sedan',
	fuel_type enum('gasoline', 'electric', 'hybrid') not null default 'gasoline',
	vendor_id int not null,
	make varchar(20) not null,
	model varchar(20) not null,
	mileage int not null,
	status enum('avaliable', 'booked', 'rented') not null default 'avaliable',
	candition varchar(500),
	primary key (car_id)
);

create table car_images (
	image_id int not null auto_increment,
	car_id int not null,
	image_name varchar(100) not null,
	path varchar(200) not null,
	primary key (image_id)
);

create table vendors (
	vendor_id int not null auto_increment,
	vendor_name varchar(50) not null,
	phone varchar(20) not null,
	email varchar(50) not null,
	location varchar(100) not null,
	description varchar(500),
	primary key (vendor_id)
);

create table customers (
	customer_id int not null auto_increment,
	customer_name varchar(50) not null,
	phone varchar(20) not null,
	email varchar(50) not null,
	primary key (customer_id)
);

create table orders (
	order_id int not null auto_increment,
	customer_id int not null,
	car_id int not null,
	pickup_location varchar(100) not null,
	pickup_date date not null,
	dropoff_location varchar(100) not null,
	dropoff_date date not null,
	total_price float not null,
	mileage_limit int,
	order_date date not null,
	primary key (order_id)
);

/*
Toyota Corolla - The Toyota Corolla is a trusted and economical compact sedan, known for its reliability and fuel efficiency. It offers practicality and a comfortable ride, making it a popular choice for daily commuting and family transportation.

Ford Mustang - The Ford Mustang is an iconic American muscle car that combines classic design with powerful performance. With its distinct style and robust engines, the Mustang delivers thrilling acceleration and a true sense of driving excitement.

Honda Civic - The Honda Civic is a versatile and well-rounded compact car. It's renowned for its longevity, excellent fuel economy, and comfortable interior. The Civic appeals to a wide range of drivers, from practical commuters to enthusiasts.

Chevrolet Corvette - The Chevrolet Corvette is a legendary sports car that boasts sleek aesthetics and exhilarating speed. With its potent V8 engines, precise handling, and driver-focused cockpit, the Corvette offers an extraordinary driving experience.

BMW 3 Series - The BMW 3 Series is a luxurious and sporty sedan that sets the standard for driving dynamics in its class. It combines elegant design, advanced technology, and responsive engines to provide a refined yet engaging driving journey.

Mercedes-Benz E-Class - The Mercedes-Benz E-Class is an executive car that exudes elegance and sophistication. With its plush interior, cutting-edge technology, and comfortable ride, the E-Class offers a first-class travel experience.

Tesla Model S - The Tesla Model S is a groundbreaking electric luxury sedan, known for its impressive range and instant acceleration. Pioneering autonomous features and a minimalist interior make the Model S a symbol of future-oriented automotive innovation.

Audi A4 - The Audi A4 is a stylish and tech-savvy sedan that emphasizes modern design and advanced technology. Its well-crafted interior, refined ride, and array of high-tech features contribute to its appeal among luxury car enthusiasts.

Subaru Outback - The Subaru Outback is a rugged crossover wagon designed for both on-road comfort and off-road adventures. With its spacious interior, all-wheel drive capability, and ample cargo space, the Outback is a versatile choice for outdoor enthusiasts.

Nissan Altima - The Nissan Altima is a comfortable midsize sedan offering a balance of practicality and refined features. Known for its smooth ride, spacious cabin, and user-friendly technology, the Altima is a reliable option for daily commuting and family travel.
*/

INSERT INTO vendors
(vendor_name, phone, email, location, description)
VALUES('Neil', '(403)888-8888', 'neil@gmail.com', '7652 26 Ave SW', 'a reliable personal vendor');

INSERT INTO cars
(location, available_time, price, car_type, fuel_type, vendor_id, make, model, mileage, status, candition)
VALUES('7652 26 Ave SW', null, 50, 'sedan', 'gasoline', 1, 'Toyota', 'Corolla', 10000, 'avaliable', 'The Toyota Corolla is a trusted and economical compact sedan, known for its reliability and fuel efficiency. It offers practicality and a comfortable ride, making it a popular choice for daily commuting and family transportation.');

INSERT INTO cars
(location, available_time, price, car_type, fuel_type, vendor_id, make, model, mileage, status, candition)
VALUES('7652 26 Ave SW', null, 60, 'sedan', 'gasoline', 1, 'Audi', 'A4', 5000, 'avaliable', 'The Audi A4 is a stylish and tech-savvy sedan that emphasizes modern design and advanced technology. Its well-crafted interior, refined ride, and array of high-tech features contribute to its appeal among luxury car enthusiasts.');

INSERT INTO customers
(customer_name, phone, email)
VALUES('John wick', '(403)777-7777', 'johnwick@gmail.com');

INSERT INTO hgknight.orders
(customer_id, car_id, pickup_location, pickup_date, dropoff_location, dropoff_date, total_price, mileage_limit, order_date)
VALUES(1, 1, '7652 26 Ave SW', '2023-8-2 12:20', '7652 26 Ave SW', '2023-8-6 12:20', 250, 2000, '2023-8-1 09:21');