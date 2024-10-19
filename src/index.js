const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./config');
const todoRoutes = require('./routes/todoRoutes.js');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('./todos', todoRoutes);

const startServer = async () => {
    try {
        await sequelize.authenticate();
        console.log('Database connected');
        await sequelize.sync();
        app.listen(3000, () => {
            console.log('Server is running on port 3000');
        });
    } catch (error) {
        console.error(' Unable to connect to the database', error);
    }
};

startServer();
