import express, { Request } from 'express';
import { generateUsers, IUser } from './generate-users';

const app = express();
const port = 3000;

let users = generateUsers(60);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/users', (req: Request<any, any, any, { limit: number; page: number }>, res) => {
  const { limit, page } = req.query;
  console.info(users);
  res.send(users.slice(limit * page, limit * page + limit));
});

app.put('/users', (req: Request<any, any, IUser, any>, res) => {
  const changedUser = req.body;
  const userIndex = users.findIndex((user) => user._id === changedUser._id);
  users[userIndex] = changedUser;
  return res.status(200);
});

app.post('/users', (req: Request<any, any, IUser, any>, res) => {
  users.push(req.body);
  return res.status(200);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
