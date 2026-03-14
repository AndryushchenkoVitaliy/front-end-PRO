import express from 'express';
import { connect } from 'mongoose';
import cors from 'cors';
import { json } from 'body-parser';

const app = express();
const PORT = 5000;

// Middlewares
app.use(cors());
app.use(json());

// Routes
import todosRoutes from './routes/todos';
app.use('/api/todos', todosRoutes);


// Тестовый маршрут
app.get('/', (req, res) => {
    res.send('Backend работает!');
});

// Подключение к MongoDB
connect('mongodb+srv://Invictus:vital123@cluster0.t8sfjst.mongodb.net/todo_app')
    .then(() => console.log('MongoDB Atlas подключен'))
    .catch(err => console.error('Ошибка подключения к MongoDB Atlas:', err));

app.listen(PORT, () => console.log(`Сервер запущен на http://localhost:${PORT}`));