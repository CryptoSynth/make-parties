//load modules
const express = require('express');
const hbs = require('express-handlebars');

//init express
const app = express();

//set template engine
app.engine(
  'hbs',
  hbs({
    extname: 'hbs',
    defaultLayout: 'main'
  })
);
app.set('view engine', 'hbs');

//set routes
app.get('/', (req, res) => {
  res.render('home', { msg: 'Handlebars are Cool!' });
});

//set port
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`App listening on port ${port}.`);
});
