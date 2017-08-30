var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    console.log("========== GET ==========")
    console.log("Request headers:");
    for (var header in req.headers) {
        console.log("# header["+header+"] ::: "+req.headers[header]);
    }

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
          console.log("User Authenticated!")
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

router.put('/', function(req, res) {
    console.log("========== PUT ==========")

    console.log("*******\n>current USERS: "+JSON.stringify(USERS, null, "  ")+"\n*******");


    // Parsing request body
    var body = [];
    req.on('data', function(chunk) {
        body.push(chunk);
    }).on('end', function() {

        body = Buffer.concat(body).toString();
        var requestObj = JSON.parse(body);
        console.log(requestObj);

        var foundUser = false
        
        for (var user in USERS) {
            if (USERS.hasOwnProperty(user)) {
                var element = USERS[user];
                if (element.id == requestObj.id) {
                    USERS[user] = requestObj
                    foundUser = true
                    break
                }
            }
        }
    
        if(foundUser == true){
            console.log("Found user!")
            res.send(USERS[0])
        } else {
            console.log("User not found")
            res.status(401).send({
                "message": "User not found"
            });
        }
    
        console.log("*******\n>after change USERS: "+JSON.stringify(USERS, null, "  ")+"\n*******");
    });
    
});

const USERS = [
    {
        "id" : 1,
        "email" : "ramon@email.com",
        "password" : "1234",
        "name" : "Ramon Honório",
        "creationDate" : "2017-01-01",
        "streetAddress" : "Avenida Paulista, 1201 - São Paulo, SP",
        "photo" : null,
        "storeId" : 0
    },
    {
        "id" : 2,
        "email" : "eoq@email.com",
        "password" : "1234",
        "name" : "EoQ user",
        "creationDate" : "2017-01-01",
        "streetAddress" : "Avenida Paulista, 1200 - São Paulo, SP",
        "photo" : null,
        "storeId" : 0
    },
    {
        "id" : 3,
        "email" : "",
        "password" : "",
        "name" : "Empty user",
        "creationDate" : "2017-01-01",
        "streetAddress" : "Avenida Paulista, 1200 - São Paulo, SP",
        "photo" : null,
        "storeId" : 0
    }
]

module.exports = router;
