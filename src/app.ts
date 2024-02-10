import express from 'express';

const app = express();

app.get('/', (req, res) => {
  return res.status(200).json({ message: 'Hello world!' });
});

app.listen(3000, () => console.log(`App listening on port 3000`));
