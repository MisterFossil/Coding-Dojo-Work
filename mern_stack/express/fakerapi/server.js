const express = require('express');
const app = express();
const faker = require('faker');

const server = app.listen(8000, () =>
    console.log(`Server is listening for requests on port ${server.address().port}.`)
)


class User {
    constructor() {
        this._id;
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }

}

class Company {
    constructor() {
        this._id;
        this.name = faker.company.companyName();
        this.address = [
            {street: faker.address.streetAddress()},
            {city: faker.address.city()},
            {state: faker.address.state()},
            {zipCode: faker.address.zipCode()},
            {country: faker.address.country()},
        ]
    }

}

// console.log(new User());
// console.log(new Company());

//Create an api route "/api/users/new" that returns a new user	
app.get("/api/users/new", (req,res) => {
    const newUser = new User();
    return res.json(newUser);
});
//Create an api route "/api/companies/new" that returns a new company	
app.get("/api/companies/new", (req,res) => {
    const newCompany = new Company();
    return res.json(newCompany);
});
//Create an api route "/api/user/company" that returns both a new user and a new company	
app.get("/api/user/company", (req,res) => {
    const company = new Company();
    const user = new User();
    return res.json({user, company});
});