import express from 'express';
import mongoose from 'mongoose';
import apiRoutes from './routes/apiRoutes.js';


const app = express();
app .use(express.json());
app .use(express.static('public'));

const dbURI = 'mongodb+srv://justasnarijauskas:gHS9GnP07Gkxn1Yc@clusterjustas.rht5g.mongodb.net/rest-api'

mongoose.connect(dbURI)
    .then(() => app.listen(3002))
    .catch((err) => console.log(err));

app.set('view engine', 'ejs');


app.use('/api', apiRoutes);
app.get('/', (req, res) => res.render('home'));
app.get('/new', (req, res) => res.render('new'));
