var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.send(STORES);
});

router.get('/:id', function(req, res) {
    var found = false
    for (var store in STORES) {
        if (STORES.hasOwnProperty(store)) {
            var element = STORES[store];
            if (element.id == req.params.id) {
                found = true
                res.send(element);
                break
            }
        }
    }
    if (found == false) {
        res.status(401).send({
            "message": "No store found."
        });
    }
});

router.put('/', function(req, res) {
    console.log("========== PUT ==========")
    console.log("*******\n>current STORES: "+JSON.stringify(STORES, null, "  ")+"\n*******");

    // Parsing request body
    var body = [];
    req.on('data', function(chunk) {
        body.push(chunk);
    }).on('end', function() {

        body = Buffer.concat(body).toString();
        var requestObj = JSON.parse(body);
        console.log(requestObj);

        var foundStore = false
        
        for (var store in STORES) {
            if (STORES.hasOwnProperty(store)) {
                var element = STORES[store];
                if (element.id == requestObj.id) {
                    STORES[store] = requestObj
                    foundStore = true
                    break
                }
            }
        }
    
        if(foundStore == true){
            console.log("Found store!")
            res.send(requestObj)
        } else {
            console.log("Store not found")
            res.status(401).send({
                "message": "Store not found"
            });
        }
    
        console.log("*******\n>after change STORES: "+JSON.stringify(STORES, null, "  ")+"\n*******");
    }); 
});

router.post('/', function(req, res) {
    console.log("========== POST ==========")
    console.log("*******\n>current STORES: "+JSON.stringify(STORES, null, "  ")+"\n*******");

    // Parsing request body
    var body = [];
    req.on('data', function(chunk) {
        body.push(chunk);
    }).on('end', function() {

        body = Buffer.concat(body).toString();
        var requestObj = JSON.parse(body);
        console.log(requestObj);
        
        var newId = USERS[USERS.length - 1].id + 1;
        
        newStore = requestObj
        newStore["id"] = STORES[STORES.length - 1].id + 1

        for (var user in USERS) {
            if (USERS.hasOwnProperty(user)) {
                var element = USERS[user];
                if (element.id == requestObj.userId) {
                    USERS[user].storeId = newStore["id"]
                    break
                }
            }
        }
    
        STORES.push(newStore);
        
        res.send(newStore)

        console.log("*******\n>after change STORES: "+JSON.stringify(STORES, null, "  ")+"\n*******");
    }); 
});

module.exports = router;
