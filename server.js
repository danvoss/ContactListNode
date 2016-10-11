var express = require('express');
var app = express();

app.use(express.static(__dirname + "/public"));

app.get("/contactlist", function(req, res){
  console.log("Get request received.");
  person1 = {
    name: "Alice",
    email: "a@gmail.com",
    number: "555-1212"
  };

  person2 = {
    name: "Bob",
    email: "b@yahoo.com",
    number: "555-3434"
  };

  person3 = {
    name: "Charlie",
    email: "c@aol.com",
    number: "555-5555"
  };

  var contactlist = [person1, person2, person3];
  res.json(contactlist);
});

app.listen(3000);
console.log("Server running on port 3000");
