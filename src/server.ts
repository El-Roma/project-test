import express from 'express';
import bodyParser from 'body-parser';


export const app = express();
app.use(bodyParser.json());


app.get('/api/hello', (req, res) => {
  res.status(200).json({ message: 'Hello, TypeScript!' });
});


app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
