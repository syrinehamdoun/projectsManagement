const mongoose = require('mongoose');
const Promise = require('bluebird');
const config = require('./index');
const log = require('../log');
const MONGO_HOST = process.env.MONGO_HOST || 'mongodb+srv://syrine:syrine@cluster0.mnuga.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';


mongoose.Promise = Promise; // plug-in bluebird as mongoose Promise

// to export: init mongo connection, set logging
const init = () => {
  connectMongo();
  mongoose.connection.on('connected', () => log.log('mongo', `connected to db: "${MONGO_HOST}"`));
  mongoose.connection.on('error', err => log.err('mongo', 'error', err.message || err));
};


// connect to mongo host, set retry on initial fail
const connectMongo = () => {
  mongoose.connect('mongodb+srv://syrine:syrine@cluster0.mnuga.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
    .catch(err => {
      log.err('mongo', 'connection to db failed', err.message || err);
      setTimeout(connectMongo,5000);
    });
}


module.exports = init;
