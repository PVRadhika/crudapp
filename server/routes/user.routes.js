module.exports = (app) => {
    const users = require('../controller/user.controller.js');
    var router = require('express').Router();
  
    // creating a user
    router.post("/createUser", users.create);
    // fetch users
    router.get("/getAllusers", users.findAll);
  
    // fetch single user record by id
    router.get("/getUser/:id", users.findoneById);
  
    // update user
    router.put('/updateUser/:id', users.update);
  
    // delete user as per the id
    router.delete('/:id', users.delete);
  
    app.use("/api/users", router);
  };
  