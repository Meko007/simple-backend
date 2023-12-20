import express from 'express';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT ?? 5000;

app.get('/', (req, res) => {
    res.send('Ndeewo');
});

app.listen(port, () => {
    console.log(`server is listening on port ${port}`);
});