const express = require('express')

const fs = require('fs/promises')

const app = express()

app.get('/breed', (req, res) =>
  fetch('https://dog.ceo/api/breeds/list/all')
    .then(response => response.json())
    .then(data => {
      res.json(data)
    })
    .catch(error => {
      console.log(error)
    })
)

app.get('/randomImage', (req, res) =>
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data => {
      res.json(data)
    })
    .catch(error => {
      console.log(error)
    })
)

app.get('/listImages', (req, res) =>
  fetch('https://dog.ceo/api/breed/hound/images')
    .then(response => response.json())
    .then(data => {
      res.json(data)
    })
    .catch(error => {
      console.log(error)
    })
)

app.listen(4000, () => console.log('server on...'))
