const express = require('express')
const request = require('./request')
const app = express()
const port = process.env.PORT

const makeUrl = (url) => {
  return `https://api.openai.com/${url.split('chatgpt/')[1]}`
}
app.get('/chatgpt/*', (req, res) => {
  const {url} = req;
  const headers = (req.headers);
  const method = 'GET';
  console.log({url})
  // res.send({hello: 1})
  request(makeUrl(url), {headers, method}, ).then((response) => {
    res.send(response)
  })
})
app.post('/chatgpt/*', (req, res) => {
  const {url, body} = req;
  const headers = (req.headers);
  const method = 'POST';
  console.log({url})
  // res.send({hello: 1})
  request(makeUrl(url), {headers, method, body}).then((response) => {
    res.send(response)
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})