const mongoose = require('mongoose');
//Use mongoose with native Node Promise.
mongoose.Promise = global.Promise;
//'mongodb://localhost:27017/default'
//Create a connection to MongoDB.
const connect = (dbUrl) => {
return mongoose.connect(dbUrl,  { useNewUrlParser: true, useCreateIndex: true })
}

module.exports = {connection: connect};