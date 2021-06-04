//imports
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Messages from './back-end/models/Messages.js';
import Pusher from 'pusher';
import cors from 'cors';
import path from 'path';

// env file config
dotenv.config({ path: './config/.env' });

//app config
const app = express();
const port = process.env.PORT || 2121;

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//pusher config
const pusher = new Pusher({
  appId: '1213737',
  key: process.env.PUSHER_KEY,
  secret: process.env.PUSHER_SECRET,
  cluster: 'eu',
  useTLS: true,
});

//db config
mongoose.connect(process.env.DB_STRING, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.once('open', () => {
  console.log('DB connected');

  // mongodb change stream

  const msgCollection = db.collection('messages');
  const changeStream = msgCollection.watch();

  changeStream.on('change', change => {
    console.log('change occurred');
    if (change.operationType === 'insert') {
      const messageDetails = change.fullDocument;
      pusher.trigger('messages', 'inserted', {
        name: messageDetails.name,
        message: messageDetails.message,
        timestamp: messageDetails.timestamp,
        received: messageDetails.received,
      });
    } else {
      console.log('Error triggering Pusher');
    }
  });
});

//api  will be migrated to routes folder and pointed as such
app.get('/', (req, res) =>
  res
    .status(200)
    .sendFile(path.resolve(__dirname, '../front-end/build/', 'index.html'))
);
// app.get('*', (request, response) {
//   response.sendFile(path.resolve(__dirname, '../react-ui/build', 'index.html'));
// });
// need to handle main page and auth routes here

app.get('/messages/sync', (req, res) => {
  Messages.find((err, data) => {
    err ? res.status(500).send(err) : res.status(200).send(data);
  });
});

app.post('/messages/new', (req, res) => {
  const dbMessage = req.body;

  Messages.create(dbMessage, (err, data) => {
    err
      ? res.status(500).send(err)
      : res.status(201).send(`message created \n ${data}`);
  });
});

// listen
app.listen(port, () => console.log(`Listening on ${port}`));
