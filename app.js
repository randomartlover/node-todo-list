const express = require('express');

const app = express();

app.use(express.urlencoded({ extended: false }))

app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));

app.get('/', function(req,res) {
  res.render('index');
})

app.get('/contact', function (req, res) {
  res.render('contact', {qs: req.query});
})

app.post('/contact', function (req, res) {
  res.render('contact-success', { data: req.body });
})

app.get('/profile/:name', function (req, res) {
  const data = {age: 24, job: "Dreamer", hobbies: ["puzzles", "dancing", "singing", "swimming"]}
  res.render('profile', {person: req.params.name, data});
})

app.listen(3000)
