//load modules
const express = require('express');
const path = require('path');
const hbs = require('express-handlebars');

//init express
const app = express();

//set template engine
app.engine(
  'hbs',
  hbs({
    extname: 'hbs',
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, 'views/layouts'),
    partialsDir: path.join(__dirname, 'views/partials')
  })
);
app.set('view engine', 'hbs');

//Events DB
const events = [
  {
    title: 'I am your first event',
    desc: 'A great event that is super fun to look at and good',
    imgUrl:
      'https://img.purch.com/w/660/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzA4OC85MTEvb3JpZ2luYWwvZ29sZGVuLXJldHJpZXZlci1wdXBweS5qcGVn'
  },
  {
    title: 'I am your second event',
    desc: 'A great event that is super fun to look at and good',
    imgUrl:
      'https://img.purch.com/w/660/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzA4OC85MTEvb3JpZ2luYWwvZ29sZGVuLXJldHJpZXZlci1wdXBweS5qcGVn'
  },
  {
    title: 'I am your third event',
    desc: 'A great event that is super fun to look at and good',
    imgUrl:
      'https://img.purch.com/w/660/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzA4OC85MTEvb3JpZ2luYWwvZ29sZGVuLXJldHJpZXZlci1wdXBweS5qcGVn'
  }
];

app.get('/', (req, res) => {
  res.render('events-index', { events });
});

//set port
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`App listening on port ${port}.`);
});
