import express from 'express';
import cors from 'cors';
import { readFile } from 'fs/promises';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get('/api/movies', async (req, res) => {
    try {
        const data = await readFile('./data.json', 'utf-8');
        res.json(JSON.parse(data));
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
