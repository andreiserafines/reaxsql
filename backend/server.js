const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const port = 3001;

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to database
const dataB = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'reaxsql'
})
dataB.connect((err) => {
    if (err) {
        console.error("Database connection failed:", err.stack);
        return;
    }
    console.log("Connected to database.");
});

// Get Data
app.get('/', (req, res) => {
    const sql = "SELECT * FROM personnel"
    dataB.query(sql, (err, result) => {
        if (err) return res.json({ Message: "Error", error: err });
        return res.json(result);
    })
});

// Post Data
app.post('/create', (req, res) => {
    const sql = "INSERT INTO personnel (`name`, `email`, `address`) VALUES (?)";
    const values = [
        req.body.name,
        req.body.email,
        req.body.address
    ]
    dataB.query(sql, [values], (err, result) => {
        if (err) return res.json(err);
        return res.json(result);
    })
})

// Read Data
app.get('/read/:id', (req, res) => {
    const sql = "SELECT * FROM personnel WHERE id = ?";
    const id = req.params.id;
    dataB.query(sql, [id], (err, result) => {
        if (err) return res.json({ Message: "Error inside server" });
        return res.json(result[0]);
    })
})

// Update Data
app.put('/update/:id', (req, res) => {
    const sql = "UPDATE personnel SET `name`=?, `email`=?, `address`=? WHERE id=?";
    const { name, email, address } = req.body;
    const id = req.params.id;
    dataB.query(sql, [name, email, address, id], (err, result) => {
        if (err) return res.json({ Message: "Error inside server", error: err });
        return res.json(result);
    });
});

// Delete Data
app.delete('/delete/:id', (req, res) => {
    const sql = "DELETE FROM personnel WHERE id=?";
    const id = req.params.id;
    dataB.query(sql, [id], (err, result) => {
        if (err) return res.json({ Message: "Error inside server", error: err });
        return res.json(result);
    });
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})