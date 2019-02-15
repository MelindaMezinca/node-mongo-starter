const User = require('../models/user.model');
const bodyParser = require('body-parser');

// create a new user 
const user_create = (req, res) =>  {
    let user = new User(
        {
            id: req.body.id,
            username: req.body.username,
            password: req.body.password,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
        }
    );


    // user.save( (err) => {
    //     if (err) {
    //         return next(err); //promise
    //     }
    //     res.send('User created successfully')
    // })

    user.save()
    .then(() => res.send('User created successfully'))
    .catch(err => {
        res.send(err); 
        console.log(err); 
        //send error further
        return Promise.reject(err) ;
    });
};


// read an existing user 
// exports.user_details =  (req, res, next) => {
//     User.findById(req.params.id, (err, user) => {
//         if (err) return next (err);
//         res.send(user);
//     })
// }

//add return everywhere
const user_details =  (req, res, next) => {
    return User.findById(req.params.id)
    .then((user) => res.send(user))
    .catch((err) => console.log(err));
    }

// read all users
// exports.user_all = (req, res, next) => {
//     User.find(req.params.id, (err, user) => { //repair
//         if (err) return next (err);
//         res.send(user); //promise es6
//     })
// }

const user_all = (req, res, next) => {
    User.find(req.params.id)
    .then((user) =>  res.send(user))
    .catch((err) => console.error(err));
}


// update an existing product
// exports.user_update = (req,res) => {
//     User.findByIdAndUpdate(req.params.id, {$set: req.body},  (err, user) => {
//         if (err) return next (err);
//         res.send('User updated');
//     })   //promise es6
// }

function user_update(req,res){
    User.findByIdAndUpdate(req.params.id, {$set: req.body})
    .then(() =>  res.send('User updated'))
    .catch((err) => console.error(err));
}

module.exports = {
    user_create,
    user_details,
    user_all,
    user_update
}
