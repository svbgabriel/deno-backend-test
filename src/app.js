require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

class App {
  constructor() {
    this.server = express();
    this.database();
    this.middlewares();
    this.routes();
  }

  database() {
    mongoose.connect(process.env.DB_URL, {
      dbName: 'deno-test',
    });
  }

  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }
}

module.exports = new App().server;
