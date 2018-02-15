const Users = require('../../models/Users');

module.exports = (app) => {
  app.get('/api/users', (req, res, next) => {
    Users.find()
      .exec()
      .then((users) => res.json(users))
      .catch((err) => next(err));
  });

  app.post('/api/users', function (req, res, next) {
    const user = new Users();

    user.save()
      .then(() => res.json(user))
      .catch((err) => next(err));
  });

  app.delete('/api/users/:id', function (req, res, next) {
    Users.findOneAndRemove({ _id: req.params.id })
      .exec()
      .then((users) => res.json(users))
      .catch((err) => next(err));
  });

  app.put('/api/users/:id', (req, res, next) => {
    Counter.findById(req.params.id)
      .exec()
      .then((user) => {
        counter.save()
          .then(() => res.json(counter))
          .catch((err) => next(err));
      })
      .catch((err) => next(err));
  });
};
