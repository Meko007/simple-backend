import { Request, Response, Router } from 'express';
import { Post } from '../model/model';

const router = Router();

router.post('/posts', async (req: Request, res: Response) => {
	try {
		const { post } = req.body;
		const newPost = await Post.create({ post });
		res.status(201).json(newPost);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'Internal Server Error' });        
	}
});

router.get('/posts', async (req: Request, res: Response) => {
	try {
		const posts = await Post.findAll();
		res.status(200).json(posts);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'Internal Server Error' });
	}
});

router.get('/posts/:id', async (req: Request, res: Response) => {
	try {
		const { id } = req.params;
		const post = await Post.findByPk(id);

		if (!post) {
			return res.status(404).json({ message: 'Post not found' });
		}

		res.status(200).json(post);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'Internal Server Error' });
	}
});

router.put('/posts/:id', async (req: Request, res: Response) => {
	try {
		const { id } = req.params;
		const { post } = req.body;

		const postExists = await Post.findByPk(id);
        
		if (!postExists) {
			return res.status(404).json({ message: 'Post not found' });
		}

		await Post.update({ post: post }, {
			where: {
				id: id,
			},
		});
		res.status(200).json({ message: 'Updated successfully' });
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'Internal Server Error' });
	}
});

router.delete('/posts/:id', async (req: Request, res: Response) => {
	try {
		const { id } = req.params;
		const postExists = await Post.findByPk(id);
        
		if (!postExists) {
			return res.status(404).json({ message: 'Post not found' });
		}

		await Post.destroy({
			where: {
				id: id,
			},
		});
		res.status(200).json({ message: 'Deleted successfully' });
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'Internal Server Error' });
	}
});

export default router;