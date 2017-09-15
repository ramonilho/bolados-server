var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    console.log("========== GET / ==========")
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

router.get('/u/:id', function(req, res) {
    console.log("USER: get id: "+req.params.id)
    var found = false
    for (var user in USERS) {
        if (USERS.hasOwnProperty(user)) {
            var element = USERS[user];
            if (element.id == req.params.id) {
                found = true
                res.send(element);
                break
            }
        }
    }
    if (found == false) {
        res.status(401).send({
            "message": "User not found."
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

router.get('/mocked', function(req, res) {
    console.log("")
    // Returning first element for mocked request
    for (var u in USERS) {
        if (USERS.hasOwnProperty(u)) {
            var element = USERS[u];
            res.send(USERS[u]);
            break
        }
    }
});

router.post('/', function(req, res) {
    console.log("========== POST ==========")
    console.log("*******\n>current USERS: "+JSON.stringify(USERS, null, "  ")+"\n*******");

    // Parsing request body
    var body = [];
    req.on('data', function(chunk) {
        body.push(chunk);
    }).on('end', function() {

        body = Buffer.concat(body).toString();
        var requestObj = JSON.parse(body);
        console.log("request object:");
        console.log(requestObj);

        var newId = USERS[USERS.length - 1].id + 1;
        
        newUser = requestObj
        newUser["id"] = USERS[USERS.length - 1].id + 1,
        newUser["storeId"] = USERS[USERS.length - 1].storeId + 1,
    
        USERS.push(newUser);

        res.send(newUser)
    
        console.log("*******\n>after change USERS: "+JSON.stringify(USERS, null, "  ")+"\n*******");
    });

    
});



module.exports = router;
