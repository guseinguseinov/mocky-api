import http from 'http';
import app from './app.js';
import { config } from 'dotenv';
config();

const port = process.env.PORT || 8080;
const server = http.createServer(app);

server.listen(port, () => {
    console.log('Server listens to http://localhost:', port);
});