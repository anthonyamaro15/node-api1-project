const express = require("express");

const route = express.Router();

let users = [
  { id: "1", name: "lala1", bio: "testing lala" },
  { id: "2", name: "lala2", bio: "testing lala" },
  { id: "3", name: "lala3", bio: "testing lala" },
];

// POST /api/users
route.post("/", (req, res) => {
  const { name, bio } = req.body;
  if (!name || !bio) {
    res
      .status(400)
      .json({ errorMessage: "Please provide name and bio for the user." });
  } else {
    users.push(req.body);
    res.status(201).json(req.body);
  }
});

// GET /api/users
route.get("/", (req, res) => {
  if (!users.length) {
    res
      .status(500)
      .json({ errorMessage: "The users information could not be retrieved." });
  } else {
    res.status(200).json(users);
  }
});

// GET /api/users/:id
route.get("/:id", (req, res) => {
  const { id } = req.params;
  const user = users.find((u) => u.id === id);

  if (!user) {
    res
      .status(404)
      .json({ errorMessage: "The user with the specified ID does not exist." });
  } else {
    res.status(200).json(user);
  }
});

// DELETE /api/users/:id
route.delete("/:id", (req, res) => {
  const { id } = req.params;
  users = users.filter((u) => u.id !== id);
  console.log("user here ", users);
  if (!users) {
    res
      .status(404)
      .json({ errorMessage: "The user with the specified ID does not exist." });
  } else {
    res.status(200).json(users);
  }
});

// PUT /api/users/:id
route.put("/:id", (req, res) => {
  const { id } = req.params;
  const { name, bio } = req.body;
  const user = users.find((u) => u.id === id);
  if (!user) {
    res
      .status(404)
      .json({ errorMessage: "The user with the specified ID does not exist." });
  } else if (!name || !bio) {
    res
      .status(400)
      .json({ errorMessage: "Please provide name and bio for the user." });
  } else {
    user.name = name;
    user.bio = bio;
    res.status(200).json(user);
  }
});
module.exports = route;
