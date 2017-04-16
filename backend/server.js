import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import mongodb from 'mongodb';

const app = express();
const dbUrl = 'mongodb://localhost/codelab';

app.use(morgan('dev'));
app.use(bodyParser.json());

function validate(data) {
  let errors = {};
  if (data.title === '') errors.title = "Can't be empty";
  if (data.cover === '') errors.cover = "Can't be empty";
  const isValid = Object.keys(errors).length === 0
  return { errors, isValid };
}

mongodb.MongoClient.connect(dbUrl, function(err, db) {

    app.get('/api/games', (req, res) => {
        db.collection('games').find({}).toArray((err, games) => {
            res.json({ games });
        });
    });
    
    app.post('/api/games', (req, res) => {
        const { errors, isValid } = validate(req.body);
        if (isValid) {
        const { title, cover } = req.body;
        db.collection('games').insert({ title, cover }, (err, result) => {
            if (err) {
            res.status(500).json({ errors: { global: "Something went wrong" }});
            } else {
            res.json({ game: result.ops[0] });
            }
        });
        } else {
        res.status(400).json({ errors });
        }
    });

    app.use((req, res) => {
        res.status(404).json({
        errors: {
            global: "Still working on it. Please try again later when we implement it"
        }
        });
    })

    app.listen(
        8080, () => console.log('Server is running on Port: 8080')
    );
});