// get configs from environment
const NODE_ENV = process.env.NODE_ENV || 'development';
const PORT = process.env.PORT || 5000;
const http = require("http");
const MONGO_HOST = process.env.MONGO_HOST || 'mongodb://localhost:27017/gestion_projet';
const SECRET = process.env.SECRET || 'supersecretalltheway';
const ROOT = process.env.ROOT || '';
const CHAT_PATH = process.env.CHAT_PATH || '/chat-path';
const mongoose=require('mongoose')
const apiPath = `${ROOT !== '/' ? ROOT : ''}/api`;

// init config obj containing the app settings
const config = {
  env: NODE_ENV,
  root: ROOT,
  apiPath,
  server: {
    port: PORT,
  },
  mongo: {
    host: MONGO_HOST,
    options: {
      useNewUrlParser: true,
      reconnectTries: Number.MAX_VALUE,
    },
  },
  secret: SECRET,
  chatPath: CHAT_PATH,
};
