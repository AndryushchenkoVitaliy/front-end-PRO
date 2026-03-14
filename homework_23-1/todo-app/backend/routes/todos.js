import { Router } from 'express';
const router = Router();
// import Todo, { find, findByIdAndUpdate, findByIdAndDelete } from '../models/Todo';
import Todo from '../models/Todo';

// GET all todos
router.get('/', async (req, res) => {
    const todos = await find();
    res.json(todos);
});

// CREATE todo
router.post('/', async (req, res) => {
    const todo = new Todo({ title: req.body.title });
    const saved = await todo.save();
    res.json(saved);
});

// UPDATE todo
router.put('/:id', async (req, res) => {
    const updated = await findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
});

// DELETE todo
router.delete('/:id', async (req, res) => {
    await findByIdAndDelete(req.params.id);
    res.json({ message: 'Удалено' });
});

// DELETE /api/todos/:id
router.delete('/:id', async (req, res) => {
    try {
        const deleted = await findByIdAndDelete(req.params.id);
        if (!deleted) return res.status(404).json({ message: 'Задача не найдена' });
        res.json({ message: 'Задача удалена', id: req.params.id });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

export default router;