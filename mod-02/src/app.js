import express from 'express';
import path from 'path';
import routes from './routes';
import './database';
import cors from 'cors';

class App {
  constructor() {
    this.server = express();

    this.middleware();
    this.routes();
  }

  middleware() {
    this.server.use(cors());
    this.server.use(express.json());
    this.server.use(
      '/files',
      express.static(path.resolve(__dirname, '..', 'temp', 'upload')),
    );
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
