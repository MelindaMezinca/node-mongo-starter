const app = require('express')();
const bodyParser = require('body-parser'); //package used to handle JSON requests in a middleware
const constants = require('./src/utils/constants.js');
const dbUrl = constants.db.url;
const port = process.env.port || constants.server.port;
const user = require('./src/routes/user.route'); // Imports routes for the users

const dbConfig = require('./src/db/config.js');
dbConfig.connection(dbUrl).then(() =>  console.log('connection succesful'))

.catch((err) => console.error(err));
//body-parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/api/v1.0', user);


app.get('/api/hello', (req, res) => res.send('Hello World!'));
app.listen(port, () => console.log(`The server is started on port ${port}!`));




