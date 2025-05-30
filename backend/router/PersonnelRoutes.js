const express = require('express');
const router = express.Router();
const dataB = require('../config/db');

// Get all personnel
router.get("/", (req, res) => {
  const sql = "SELECT * FROM personnel";
  dataB.query(sql, (err, result) => {
    if (err) return res.json({ Message: "Error", error: err });
    return res.json(result);
  });
});

// Create personnel
router.post("/create", (req, res) => {
  const sql =
    "INSERT INTO personnel (`name`, `branch`, `email`, `address`) VALUES (?)";
  const values = [
    req.body.name,
    req.body.branch,
    req.body.email,
    req.body.address,
  ];
  dataB.query(sql, [values], (err, result) => {
    if (err) return res.json({ Message: "Error", error: err });
    return res.json(result);
  });
});

// Read personnel by ID
router.get("/read/:id", (req, res) => {
  const sql = "SELECT * FROM personnel WHERE id = ?";
  const id = req.params.id;
  dataB.query(sql, [id], (err, result) => {
    if (err) return res.json({ Message: "Error inside server", error: err });
    return res.json(result[0]);
  });
});

// Update personnel
router.put("/update/:id", (req, res) => {
  const sql =
    "UPDATE personnel SET `name` = ?, `branch` = ?, `email` = ?, `address` = ? WHERE id = ?";
  const values = [
    req.body.name,
    req.body.branch,
    req.body.email,
    req.body.address,
    req.params.id,
  ];
  dataB.query(sql, values, (err, result) => {
    if (err) return res.json({ Message: "Error inside server", error: err });
    return res.json(result);
  });
});

// Delete personnel
router.delete("/delete/:id", (req, res) => {
  const sql = "DELETE FROM personnel WHERE id = ?";
  const id = req.params.id;
  dataB.query(sql, [id], (err, result) => {
    if (err) return res.json({ Message: "Error inside server", error: err });
    return res.json(result);
  });
});

module.exports = router;