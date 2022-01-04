require('dotenv').config();
const http = require('http');
const app = require('./app');
const config = require('./config/index');
const connectMongo = require('./config/mongo');
const log = require('./log');
const io = require('./chat/io');
const NODE_ENV = process.env.NODE_ENV || 'development';

// init server instance
const server = http.createServer(app);

// connect to services
connectMongo();
io(server);


