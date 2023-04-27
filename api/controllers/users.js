const User = require("../models/user");

const UsersController = {
  Index: (req, res) => {
    User.findById(req.user_id, (err, data) => {
      if (err) {
        res.status(400).json({message: 'Unable to find user'})
      } else {
        res.status(200).json({user: data});
      }
    })
  },

  Create: (req, res) => {
    User.findOne({ email: req.body.email }, (err, user) => {
      if (user) {
        res.status(409).json({ message: 'Email address already exists' });
      } else {
        const user = new User(req.body);

        user.save((err) => {
          if (err) {
            res.status(400).json({ message: 'Bad request' })
          } else {
            res.status(201).json({ message: 'OK' });
          }
        });
      }
    })
  }
}

module.exports = UsersController;