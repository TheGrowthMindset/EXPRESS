const express = require("express")
const app = express()
const port = 8000



app.use(express.json())
app.use(express.urlencoded({extended:true}))

const faker = require('faker');


class User{
    constructor(){
        this.id = faker.datatype.uuid()
        this.firstName = faker.name.firstName()
        this.lastName = faker.name.lastName()
        this.phonNumber = faker.phone.phoneNumber
        this.email = faker.internet.email()
        this.password = faker.internet.password()
        this.image = faker.image.avatar()
    }
}
class Company {
   constructor(id,name,address){
    this._id = faker.datatype.uuid();
    this.companyName = faker.company.companyName();
    this.address = {
        street: faker.address.streetAddress(),
        city: faker.address.city(),
        state: faker.address.state(),
        zipCode: faker.address.zipCode(),
        country: faker.address.country()
    }
   }
}


app.get("/api/users/new", (req,response)=>{
    let newUser = new User();
    response.json({
       results : newUser
    })
})
app.get("/api/companies/new", (request, response)=>{
    let newCompany = new Company();
        response.json({
            results: newCompany
        })
})

app.get("/api/user/company", (reg, res)=>{
    let newUser = new User();
    let newCompany = new Company();
    res.json({
        results: [newUser, newCompany]
    })
})


app.listen(port, ()=>console.log('listening on port ${port}'))