const db = require("../models");
const User = db.users;

// create and save new user
exports.create = (req, res) => {
  if (!req.body.firstname) {
    res.status(400).send({ message: "Firstname cannot be empty" });
  }

  const user = new User({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    phone: req.body.phone,
  });

  user
    .save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message || "Internal server error while creating user" });
    });
};

// Fetch all users - API
exports.findAll = (req, res) => {
  User.find()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message || "Error while fetching the data from the database!" });
    });
};

// Fetch single record by ID
exports.findoneById = (req, res) => {
  const id = req.params.id;
  User.findById(id)
    .then((data) => {
      if (!data) res.status(404).send({ message: "Record is not found!" });
      else res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: "Error while fetching the record as per ID!" });
    });
};

// Update User by ID
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({ message: "Data to update cannot be empty" });
  }

  const id = req.params.id;

  User.findByIdAndUpdate(id, req.body, { new: true })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: "Cannot update user, the user might not be there in the database",
        });
      } else {
        res.send({ message: "User was updated successfully!", data: data });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error while updating the user with ID",
      });
    });
};

// Delete User by ID
exports.delete = (req, res) => {
  const id = req.params.id;
  User.findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: "Cannot delete user, the user might not be there in the database",
        });
      } else {
        res.send({ message: "User was deleted successfully!" });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error while deleting the user with ID",
      });
    });
};
