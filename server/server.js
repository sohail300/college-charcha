import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import path from 'path';
import { connectDB } from './db/connection';
import { contactus, getacall, newsletter, register, thankyou } from './controller/api';

dotenv();

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

connectDB();

app.get('/', (req, res) => {
    res.send('Root Page');
});

app.get('/thankyou', thankyou);

app.post(`/api/register`, register);

app.post('/api/getacall', getacall);

app.post('/api/newsletter', newsletter);

app.post('/api/contactus', contactus);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
