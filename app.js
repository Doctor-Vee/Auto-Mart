// import express from 'express';
// import logger from 'morgan';

const express = require('express');
const logger = require('morgan');

const app = express();
const port = process.env.PORT || 4000;

app.use(logger('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: false}));

app.get("", (req, res) => res.status(200).send({
  message: "Welcome to AutoMart"
}));

app.listen(port, ()=>console.log(`Server running on port ${port}`));