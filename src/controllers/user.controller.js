const User = require('../models/user.model');
const bodyParser = require('body-parser');

//////// create a new user ////////////
exports.user_create = (req, res) =>  {
    let user = new User(
        {
            id: req.body.id,
            username: req.body.username,
            password: req.body.password,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
        }
    );

    user.save( (err) => {
        if (err) {
            return next(err);
        }
        res.send('User created successfully')
    })
};
//////// end create a new user //////////
