const express = require('express');
const bodyParser = require('body-parser');
let con=require("./config/db")
const path = require('path');


const app = express();

// Initialize DB


// Middlewares for parsing form data and JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static files (HTML, CSS, JS)
app.set('view engine', 'ejs')
app.set('views',path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());

// Route to serve homepage
app.get('/', (req, res) => {
  res.render('index');
});

app.set('view engine', 'ejs');

app.get('/login', (req, res) => {
  res.render('login'); 
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;

  const sql = 'SELECT * FROM users WHERE email = ? AND password = ?';
  con.query(sql, [email, password], (err, result) => {
    if (err) {
      console.log('Query error:', err);
      return res.status(500).send('Internal server error');
    }
 if (result.length > 0) {
      res.send('Login successful!');
    } else {
      res.send('Invalid email or password');
    }
  });
});



app.get('/register', (req, res) => {
  res.render('register',{msg: ''}); 
});

app.post('/save', (req, res) => {
  const { email, password } = req.body;

  const sql = 'SELECT * FROM users WHERE email = ? AND password = ?';
  con.query(sql, [email, password], (err, result) => {
    if (err) {
      console.log('Query error:', err);
      return res.status(500).send('Internal server error');
    }
 if (result.length > 0) {
      res.send('Register successfully!');
    } else {
      res.send('Invalid email or password');
    }
  });
});

module.exports = app;
