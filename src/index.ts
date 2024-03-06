import express from 'express';
import 'dotenv/config';
import posts from './routes/post.route';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/v1', posts);

const port = process.env.PORT ?? 5000;

app.get('/', (req, res) => {
	res.send('Ndeewo');
});

app.listen(port, () => {
	console.log(`server is listening on port ${port}`);
});