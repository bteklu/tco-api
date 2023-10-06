import express from 'express';
import http from 'http';
import bodyParse from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import mongoose from 'mongoose';
import routers from './routers';

const app = express();

app.use(
  cors({
    credentials: true,
  })
);
app.use(compression());
app.use(cookieParser());
app.use(bodyParse.json());

const server = http.createServer(app);

server.listen(8080, () => {
  console.log('Server is Running http://localhost:8080/');
});

mongoose.Promise = Promise;
mongoose.connect(
  'mongodb+srv://bteklu00:LZIV1ZY0PrPPThzI@tco-clouster0.pqhri8r.mongodb.net/?retryWrites=true&w=majority'
);
mongoose.connection.on('error', (error: Error) => console.log(error));

app.use('/', routers());
