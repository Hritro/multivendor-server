// import express from 'express';
const express = require('express');
const UserRouter = require('./modules/user/user.route');
const app = express();


app.use(express.json()); //it is a middleware to show the data we send from postman


app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Server is running...'
  })
});

app.use(UserRouter);




module.exports = app;