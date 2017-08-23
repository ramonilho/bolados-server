var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {

    console.log("Request headers:");
    for (var header in req.headers) {
        console.log("header["+header+"] ::: "+req.headers[header]);
    }
    console.log("*************************");

    var requestEmail = req.headers["email"]
    var requestPassword = req.headers["password"]

    // get user
    var userResults = []
    userResults = USERS.filter(function( user ) {
        return user.email == requestEmail
    })

    if (userResults.length > 0) {
      var user = userResults[0]
      if (user.password == requestPassword) {
          console.log("Authenticated!")
          res.send(user)
      } else {
          res.status(401).send({
              "message": "Invalid password"
          });
      }
    } else {
        res.status(401).send({
            "message": "User not found"
        });
    }


});

const USERS = [
    {
        "id" : 1,
        "email" : "ramon@email.com",
        "password" : "1234",
        "name" : "Ramon Honório",
        "creationDate" : "2017-01-01",
        "photo" : null,
        "storeId" : 0
    },
    {
        "id" : 2,
        "email" : "eoq@email.com",
        "password" : "1234",
        "name" : "Ramon Honório",
        "creationDate" : "2017-01-01",
        "photo" : null,
        "storeId" : 0
    },
    {
        "id" : 3,
        "email" : "",
        "password" : "",
        "name" : "Ramon Honório",
        "creationDate" : "2017-01-01",
        "photo" : null,
        "storeId" : 0
    }
]

module.exports = router;
