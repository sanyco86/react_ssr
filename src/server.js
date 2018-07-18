import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './App';
import Html from './Html';

const port = 8080;
const server = express();

server.get('/', (req, res) => {
  const body = renderToString(<App />);
  const title = 'TN Shop';

  res.send(
    Html({
      body,
      title
    })
  );
});

server.listen(port);
console.log(`Serving at http://localhost:${port}`);
