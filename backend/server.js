require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");

const saltRounds = 10;
const dataB = require("./config/db"); // Make sure this file exists!

const app = express();
const port = process.env.PORT || 3001;

app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

// Get data
app.get("/", (req, res) => {
  const sql = "SELECT * FROM user_credentials";
  dataB.query(sql, (err, result) => {
    if (err) return res.json({ Message: "Error", error: err });
    return res.json(result);
  });
});

// Register user
app.post("/user_credentials", (req, res) => {
  const sql =
    "INSERT INTO user_credentials (`username`, `email`, `password`) VALUES (?)";
  bcrypt.hash(req.body.password.toString(), saltRounds, (err, hash) => {
    if (err) return res.json({ Error: "Error for hashing password" });

    const values = [req.body.username, req.body.email, hash];

    dataB.query(sql, [values], (err, result) => {
      if (err) return res.json({ Message: "Error", error: err });
      return res.json({ Status: "Success" });
    });
  });
});

// Login user
app.post("/login", (req, res) => {
  const sql = "SELECT * FROM user_credentials WHERE email = ?";
  dataB.query(sql, [req.body.email], (err, data) => {
    if (err) return res.json({ Error: "Login error in server" });
    if (data.length > 0) {
      bcrypt.compare(
        req.body.password.toString(),
        data[0].password,
        (err, response) => {
          if (err) return res.json({ Error: "Error comparing passwords" });
          if (response) {
            const username = data[0].username;
            const token = jwt.sign({ username }, "jwt-secret-key", {
              expiresIn: "1d", // fixed typo
            });
            res.cookie("token", token, {
              httpOnly: true,
              maxAge: 24 * 60 * 60 * 1000, // 1 day
            });
            return res.json({ Status: "Success" });
          } else {
            return res.json({ Error: "Incorrect password" });
          }
        }
      );
    } else {
      res.json({ Error: "No email found" });
    }
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
