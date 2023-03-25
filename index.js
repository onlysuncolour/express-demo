const express = require('express')
const app = express()
const port = process.env.PORT

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});
app.get('/api/hello', (req, res) => {
  res.send({msg: `Hello World! api from ${port}`})
})
app.post('/api/hello', (req, res) => {
  res.send({msg: `Hello World! api from ${port}`})
})
app.get('/', (req, res) => {
  res.send(`Hello World! from ${port}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})