//[id , brand , model , type , pricePerDay, available]
carBooking =[
        [1,'Toyota','Corolla','Sedan',50,10],
        [2,'Honda','Civic','Sedan',55,8],
        [3,'Ford','Mustang','SportsCar',80,5],
        [4,'Jeep', 'Wrangler', 'SUV',70,7],
        [5,'Nissan', 'Altima','Sedan',45,12]
];
//1-print all car brands

console.log('print all car brands name');
carBooking.forEach(car => {
    console.log(car[1]);
});
console.log('-------');

//2-print total number of car availabile
console.log('total number of car availabile');
carBooking.forEach(car => {
    console.log(car[5]);
});
console.log('-------');
//3-print sedan cars details
console.log('sedan cars details');
a = carBooking.filter((cars)=>cars[3]=='Sedan')
console.log(a);
//4-print car with price per day greater than 60
console.log('car with price per day greater than 60');
b = carBooking.filter(num=>num[4]>60).forEach(cars=>console.log(cars))
//5-print details of 'jeep wrangler'
console.log('details ofjeep wrangler')
c=carBooking.find((cars)=>cars[2]=='Wrangler')
console.log(c);
//6-sort cars based on desending order of the price per day
console.log('cars based on desending order of the price per day');
console.log(carBooking.sort((a,b)=>b[4]-a[4]));

console.log('---');
//7-sort cars based on asending  order of available cars
console.log('cars based on asending  order of available cars');
console.log(carBooking.sort((a,b)=>a[5]-b[5]));

console.log('---');
//8-find the car with the most available cars
console.log('find the car with the most available cars');
console.log(carBooking.reduce((car1,car2)=>car1[5]>car2[5]? car1[1]:car2[1]));
console.log('----');
//9-calculate the revenue if all cars are rented for a day
console.log('all cars are rented for a day');
rented=carBooking.map(item=>item[4]).reduce((a,b)=>a+b)
console.log(rented);
//10-count number of sedan car

//11-print all unique car brands
console.log('print all car brands name');
carBooking.forEach(car => {
    console.log(car[1]);
});
console.log('-------');
//12-find the total number of available cars for all types
console.log('available cars for all types');
totalcars=carBooking.map(car=>car[4]).reduce((tal1,tal2)=>tal1+tal2)
console.log(totalcars);
console.log('----');
//13 find the cars with least avalablilty
console.log('cars with least avalablilty');
leastA=(carBooking.reduce((num1,num2)=>num1[5]<num2[5]? num1:num2))
console.log(leastA[1]);
console.log('----');

//14 check if there is any car with a price per day exacty 55
ppdy=carBooking.some(cars=>cars[4]==55)
console.log(ppdy);