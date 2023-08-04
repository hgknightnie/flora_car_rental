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
toyota corolla - the toyota corolla is a trusted and economical compact sedan, known for its reliability and fuel efficiency. it offers practicality and a comfortable ride, making it a popular choice for daily commuting and family transportation.

ford mustang - the ford mustang is an iconic american muscle car that combines classic design with powerful performance. with its distinct style and robust engines, the mustang delivers thrilling acceleration and a true sense of driving excitement.

honda civic - the honda civic is a versatile and well-rounded compact car. it's renowned for its longevity, excellent fuel economy, and comfortable interior. the civic appeals to a wide range of drivers, from practical commuters to enthusiasts.

chevrolet corvette - the chevrolet corvette is a legendary sports car that boasts sleek aesthetics and exhilarating speed. with its potent v8 engines, precise handling, and driver-focused cockpit, the corvette offers an extraordinary driving experience.

bmw 3 series - the bmw 3 series is a luxurious and sporty sedan that sets the standard for driving dynamics in its class. it combines elegant design, advanced technology, and responsive engines to provide a refined yet engaging driving journey.

mercedes-benz e-class - the mercedes-benz e-class is an executive car that exudes elegance and sophistication. with its plush interior, cutting-edge technology, and comfortable ride, the e-class offers a first-class travel experience.

tesla model s - the tesla model s is a groundbreaking electric luxury sedan, known for its impressive range and instant acceleration. pioneering autonomous features and a minimalist interior make the model s a symbol of future-oriented automotive innovation.

audi a4 - the audi a4 is a stylish and tech-savvy sedan that emphasizes modern design and advanced technology. its well-crafted interior, refined ride, and array of high-tech features contribute to its appeal among luxury car enthusiasts.

subaru outback - the subaru outback is a rugged crossover wagon designed for both on-road comfort and off-road adventures. with its spacious interior, all-wheel drive capability, and ample cargo space, the outback is a versatile choice for outdoor enthusiasts.

nissan altima - the nissan altima is a comfortable midsize sedan offering a balance of practicality and refined features. known for its smooth ride, spacious cabin, and user-friendly technology, the altima is a reliable option for daily commuting and family travel.
*/

insert into vendors
(vendor_name, phone, email, location, description)
values('neil', '(403)888-8888', 'neil@gmail.com', '7652 26 ave sw', 'a reliable personal vendor');

insert into cars
(location, available_time, price, car_type, fuel_type, vendor_id, make, model, mileage, status, candition)
values('7652 26 ave sw', null, 50, 'sedan', 'gasoline', 1, 'toyota', 'corolla', 10000, 'avaliable', 'the toyota corolla is a trusted and economical compact sedan, known for its reliability and fuel efficiency. it offers practicality and a comfortable ride, making it a popular choice for daily commuting and family transportation.');

insert into cars
(location, available_time, price, car_type, fuel_type, vendor_id, make, model, mileage, status, candition)
values('7652 26 ave sw', null, 60, 'sedan', 'gasoline', 1, 'audi', 'a4', 5000, 'avaliable', 'the audi a4 is a stylish and tech-savvy sedan that emphasizes modern design and advanced technology. its well-crafted interior, refined ride, and array of high-tech features contribute to its appeal among luxury car enthusiasts.');

insert into customers
(customer_name, phone, email)
values('john wick', '(403)777-7777', 'johnwick@gmail.com');


insert into orders
(customer_id, car_id, pickup_location, pickup_date, dropoff_location, dropoff_date, total_price, mileage_limit, order_date)
values(1, 1, '7652 26 ave sw', '2023-8-2 12:20', '7652 26 ave sw', '2023-8-6 12:20', 250, 2000, '2023-8-1 09:21');

insert into car_images (car_id, image_name, `path`) values
  (1, 'car1.jpg', '/assets'),
  (1, 'car2.jpg', '/assets'),
  (1, 'car3.jpg', '/assets')
 ;
