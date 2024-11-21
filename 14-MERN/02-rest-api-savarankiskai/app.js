import express from 'express';
import mongoose from 'mongoose';
import apiRoutes from './routes/apiRoutes.js';
import dotenv from 'dotenv';
dotenv.config();



const app = express();  // Sukuriamas express aplikacijos objektas
app.use(express.json()); // Middlewares, kad butu galima perskaityti json failus
app.use(express.static('public')); // Serve static files from the 'public' directory



// MongoDB connection URI
// const dbURI = 'mongodb+srv://justasnarijauskas:gHS9GnP07Gkxn1Yc@clusterjustas.rht5g.mongodb.net/rest-api'
// const dbURI = 'mongodb+srv://justasnarijauskas:gHS9GnP07Gkxn1Yc@clusterjustas.rht5g.mongodb.net/rest-api'

// Connect to MongoDB
// mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => app.listen(3002, () => console.log('Server running on port 3002')))
//     .catch((err) => console.log(err));

mongoose.connect(process.env.URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('listening on port', process.env.PORT)
        })
    })
    .catch((err) => console.log(err))


app.set('view engine', 'ejs');
app.use('/api', apiRoutes);
app.get('/', (req, res) => res.render('home'));
app.get('/new', (req, res) => res.render('new'));
