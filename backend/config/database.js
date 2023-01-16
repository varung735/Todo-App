const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

const MONGO_URL = process.env.MONGO_URL;

exports.connectToDB = () => {
    mongoose.connect(MONGO_URL, {
        useUniFiedTopology: true,
        useNewUrlParser: true
    })
    .then((dbHost) => {
        console.log(`Connected to DB. host: ${dbHost.connection.host}`);
    })
    .catch((error) => {
        console.log("Cannot connect to DB.");
        console.log(error.message);
        process.exit(1);
    })
}