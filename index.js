const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'static')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3000, function(){
  // called when he is actually listening
  console.log('server is listening on 3000');
});

app.get('/calc', function(req, res){
  //s = 'rgba(34, 56, 78, 0.3)'

  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let a = Math.random();
  const color = `rgba(${r}, ${g}, ${b}, ${a})`;
  // console.log('color:', color);

  res.render('calc', {color});
});
