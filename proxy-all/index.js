const express = require('express')
const request = require('./request')
const app = express()

app.use(express.json({extended: true, limit: '1mb'}))

const port = process.env.PORT

const makeUrl = (url) => {
  return `https://api.openai.com/${url.split('chatgpt/')[1]}`
}

const headersMap = (origin) => {
  const headers = {};
  if (origin['content-type']) {
    headers['Content-Type'] = origin['content-type']
  }
  if (origin['authorization']) {
    headers['Authorization'] = origin['authorization']
  }
  return headers
}

app.get('/chatgpt/*', (req, res) => {
  const {url} = req;
  const headers = headersMap(req.headers);
  const method = 'GET';
  request(makeUrl(url), {headers, method}, ).then((response) => {
    res.send(response)
  })
})
app.post('/chatgpt/*', (req, res) => {
  const {url, body} = req;
  const headers = headersMap(req.headers);
  const method = 'POST';
  request(makeUrl(url), {headers, method, body: JSON.stringify(body)}).then((response) => {
    res.send(response)
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})