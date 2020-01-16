const express = require("express");
const app = express();

app.use(express.urlencoded({extended: true}));

// req is short for request
// res is short for response
app.get("/api/users", (req, res) => {
    const users = [
        { firstName: "Henry", lastName: "Baker", email: "a@a.com" },
        { firstName: "Samtron", lastName: "NONE", email: "b@b.com" },
        { firstName: "Jim", lastName: "Baller", email: "c@c.com" },
        { firstName: "Janette", lastName: "Kiwi", email: "d@d.com" },
        { firstName: "Olaf", lastName: "Otis", email: "e@e.com" },

    ];
    return res.json({allDaUsers: users});
});

app.post("api/users/new", (req, res) => {
    // req.body will have any form content sent from React
    // we would use req.body to insert a new user in the database
    const newUser = req.body;
    //then return the new user after creation
    return res.status(201).json({newUser: newUser});
})

// if we wanted to retrieve a user with aspecific ID, we would use the following syntax in our url string
app.get("/api/users/:whateverIWanted", (req,res) => {
    // Whatever you typed after the colon in the URL will become the "KEY" in the req.params object
    console.log(req.params.whateverIWanted);
    // We can also choose to deconstruct the param object like so:
    const { whateverIWanted } = req.params;
    console.log(whateverIWanted);
});

// updating data using a put request
app.put("/api/users/update/:id", (req,res) => {
    // Here we would update the user using the id from the params object
    // and the data from the req.body object
    console.log(req.params.id);
    console.log(req.body);
    // *** UPDATE USER HERE ***
});

// deleting data using a delete request
app.delete("apiusers/delete/:id", (req,res) => {
    // Here we would delete the user using the id from the params object
    console.log(req.params.id);
});

const server = app.listen(8000, () => 
    console.log(`Server is locked and loaded on port ${server.address().port}!`)
)