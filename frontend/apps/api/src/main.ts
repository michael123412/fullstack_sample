/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 **/

// import { NestFactory } from '@nestjs/core';

// import { AppModule } from './app/app.module';

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
//   const globalPrefix = 'api';
//   app.enableCors()
//   app.setGlobalPrefix(globalPrefix);
//   const port = process.env.port || 3000;
//   await app.listen(port, () => {
//     console.log('Listening at http://localhost:' + port + '/' + globalPrefix);
//   });
// }

// bootstrap();

// ======================================================================

import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import { AppModule } from './app/app.module';
import * as express from 'express';
import * as functions from 'firebase-functions';

const server = express();

export const createNestServer = async (expressInstance) => {
  const app = await NestFactory.create(
    AppModule,
    new ExpressAdapter(expressInstance),
  );
  app.enableCors();
  return app.init();  //return app.init();
};



createNestServer(server)
    .then(v => console.log('Nest Ready'))
    .catch(err => console.error('Nest broken', err));
// server.listen(3333);
export const api = functions.https.onRequest(server);