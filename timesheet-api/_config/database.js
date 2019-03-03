const mongoose = require('mongoose');

const registerModels = () => require('../api/models');

const createConnection = connectionUrl => {
    
    mongoose.connect(connectionUrl).then(registerModels);

    mongoose.connection.on('connected', () => console.log('MongoDB connected'));
    mongoose.connection.on('disconnect', () => console.log('MongoDB disconnected'));

    process.on('SIGINT', () => {
        mongoose.connection.close().then(() => {
            console.log('MongoDB disconnected');
            process.exit(0);
        });
    });
};

module.exports = createConnection;