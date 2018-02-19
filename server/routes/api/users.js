const Users = require('../../models/Users');

module.exports = (app) => {
  app.post('/api/login', (req, res, next) => {
    let {email, other} = req.body;
    console.log(email, other);
    Users.find({email})
      .or({
        "address.street": other,
        })
      .or({
        "address.suite": other,
        })
      .or({
        "address.city": other,
        })
      .or({
        "address.zipcode": other,
        })
      .or({
        "phone": other
      })
      .exec()
      .then((users) => res.json(users))
      .catch((err) => next(err));
  });

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
