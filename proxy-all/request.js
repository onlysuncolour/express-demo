const fetch = require('node-fetch')

module.exports = async function request (url, options, body) {
  const {headers, method} = options;
  try {
    const response = await fetch(url, {
      headers,
      body: JSON.stringify(body),
      method
    })
    const json = await response.json()
    return json
  } catch (error) {
    return error
  }
}