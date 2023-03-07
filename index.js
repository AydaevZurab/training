const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

app.use(require('./routes'));

mongoose.connect(
    'mongodb+srv://into:code@cluster0.qa2hzxf.mongodb.net/backendTrening?retryWrites=true&w=majority', () => {
        
    console.log('connected');
        
        app.listen(3000, () => {
            console.log('Сервер запущен');
        });
    });


