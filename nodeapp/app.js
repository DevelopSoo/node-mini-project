const express = require('express');
const getLunch = require('./src/controllers/lunchController');
const app = express();

app.get("/lunches", getLunch)

app.listen(3000, () => {
  console.log("start")
})
