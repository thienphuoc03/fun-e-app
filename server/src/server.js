import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import http from 'http';
import cookieParser from 'cookie-parser';
import routes from './routes/index.js';

dotenv.config();

const port = process.env.PORT || 8080;
const hostname = 'localhost';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/v1', routes);

const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});
