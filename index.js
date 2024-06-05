
const express = require('express');
const app = express();
const Task = require('./model');
const mongoose = require('mongoose');
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://rajesh:rajesh@cluster0.dmzghon.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB:', err));

// Route to create a new task
app.post('/tasks/add', async (req, res) => {
    try {
        const { title, description } = req.body;
        if (!title) {
            return res.status(400).json({ error: 'Task title cannot be empty' });
        }
        const task = await Task.create({ title, description });
        res.status(201).json(task);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Route to get all tasks
app.get('/tasks/all', async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Route to mark a task as completed
app.put('/tasks/complete', async (req, res) => {
    try {
        const taskId = req.query.id; // Retrieve the task ID from the query parameter
        const task = await Task.findById(taskId);
        if (!task) {
            return res.status(404).json({ error: 'Task not found' });
        }
        if (task.completed) {
            return res.status(400).json({ error: 'Task is already marked as completed' });
        }
        task.completed = true;
        await task.save();
        res.json(task);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Route to edit task details
app.put('/tasks/edit/:id', async (req, res) => {
    try {
        const { title, description } = req.body;
        if (!title) {
            return res.status(400).json({ error: 'Task title cannot be empty' });
        }
        const task = await Task.findByIdAndUpdate(req.params.id, { title, description }, { new: true });
        if (!task) {
            return res.status(404).json({ error: 'Task not found' });
        }
        res.json(task);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Route to delete a task
app.delete('/tasks/:id', async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);
        if (!task) {
            return res.status(404).json({ error: 'Task not found' });
        }
        res.json({ message: 'Task deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
