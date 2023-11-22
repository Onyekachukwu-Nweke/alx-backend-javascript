import express from 'express';
import router from './routes/index';

const app = express();

app.use('/', router);
// app.use('/students/:major', router);

app.listen(1245, '127.0.0.1');

export default app;
