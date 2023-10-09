import { Router, Request, Response } from 'express';
import axios from 'axios';

const catRouter = Router();

catRouter.get('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const response = await axios.get(`https://api.thecatapi.com/v1/breeds/${id}`);
    const catData = response.data;

    res.json(catData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar dados os dados' });
  }
});

export default catRouter;
