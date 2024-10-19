const Todo = require('../models/todo.js');

//создание задачи
exports.createTodo = async (req, res) => {
    const { title } = req.body;
    const todo = await Todo.create({ title });
    res.status(201).json(todo);
};

//получение всех задач

exports.getTodos = async (req, res) => {
    const todos = await Todo.findAll();
    res.json(todos);
};

//обновление задачи
exports.updateTodo = async (req, res) => {
    const { id } = req.params;
    const { title, completed } = req.body;
    const todo = await Todo.findByPk(id);
    if (!todo) return res.status(404).send('Todo not found');

    todo.title = title !== undefined ? title : todo.title;
    todo.completed = completed !== undefined ? completed : todo.completed;
    await todo.save();
    res.json(todo);
};

// удаление задачи

exports.deleteTodo = async (req, res) => {
    const { id } = req.params;
    const { title, completed } = req.body;
    const todo = await Todo.findByPk(id);
    if (!todo) return res.status(404).send('Todo not found');

    await todo.destroy();
    res.status(204).send();
};
