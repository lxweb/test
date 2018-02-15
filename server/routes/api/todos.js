const Todos = require('../../models/Todos');

module.exports = (app) => {
  app.get('/api/todos', (req, res, next) => {
    Todos.find()
      .exec()
      .then((todos) => res.json(todos))
      .catch((err) => next(err));
  });

  app.get('/api/todos/:tid', (req, res, next) => {
    Todos.find({id: req.params.tid})
      .exec()
      .then((todos) => res.json(todos))
      .catch((err) => next(err));
  });

  app.get('/api/todos/uid/:uid', (req, res, next) => {

    Todos.find({userId: req.params.uid})
      .exec()
      .then((todos) => res.json(todos))
      .catch((err) => next(err));
  });

  app.post('/api/todos', function (req, res, next) {
    const todo = new Todos();
    todo.title = req.body.title;
    todo.id = new Date().getTime();
    todo.userId = req.body.userId;
    todo.save()
      .then(() => res.json(todo))
      .catch((err) => next(err));
  });

  app.delete('/api/todos/:id', function (req, res, next) {
    Todos.findOneAndRemove({ id: req.params.id })
      .exec()
      .then((todos) => res.json(todos))
      .catch((err) => next(err));
  });

  app.put('/api/todos/:id', (req, res, next) => {
    Todos.findById(req.params.id)
      .exec()
      .then((todo) => {
        todo.save()
          .then(() => res.json(todo))
          .catch((err) => next(err));
      })
      .catch((err) => next(err));
  });
};
