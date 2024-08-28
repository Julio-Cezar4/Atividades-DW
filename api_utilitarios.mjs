import express from 'express';
const app = express();
const port = 3000;

app.use(express.json()); // Middleware para interpretar JSON

// Rota para o utilitário de texto
app.post('/util/text/lowercase', (req, res) => {
    const { input } = req.body;
    const output = input.toLowerCase();
    res.json({ action: 'lowercase', input, output });
});

app.post('/util/text/uppercase', (req, res) => {
    const { input } = req.body;
    const output = input.toUpperCase();
    res.json({ action: 'uppercase', input, output });
});

// Rota para o utilitário de número
app.get('/util/number/minimum', (req, res) => {
    const { input } = req.query;
    const numbers = input.split(',').map(Number);
    const output = Math.min(...numbers);
    res.json({ action: 'minimum', input: numbers, output });
});

app.get('/util/number/maximum', (req, res) => {
    const { input } = req.query;
    const numbers = input.split(',').map(Number);
    const output = Math.max(...numbers);
    res.json({ action: 'maximum', input: numbers, output });
});

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
