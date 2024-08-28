import express from 'express';
const app = express();
const port = 3000;

app.use(express.json()); // Middleware para interpretar JSON

// Rota para o utilitário de texto
app.post('/util/text', (req, res) => {
    const { action, input } = req.body;

    let output;
    if (action === 'lowercase') {
        output = input.toLowerCase();
    } else if (action === 'uppercase') {
        output = input.toUpperCase();
    } else {
        return res.status(400).json({ error: 'Ação inválida' });
    }

    res.json({ action, input, output });
});

// Rota para o utilitário de número
app.get('/util/number', (req, res) => {
    const { action, input } = req.query;
    const numbers = input.split(',').map(Number);

    let output;
    if (action === 'minimum') {
        output = Math.min(...numbers);
    } else if (action === 'maximum') {
        output = Math.max(...numbers);
    } else {
        return res.status(400).json({ error: 'Ação inválida' });
    }

    res.json({ action, input: numbers, output });
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
