import { Request, Response } from 'express';
import pool from '../database';


class CardapioController {

    public async list (req: Request, res: Response) {
        const pizzas = await pool.query('SELECT * FROM pizzas')
        res.json(pizzas);
    } 

    public async getOne (req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const pizza = await pool.query('SELECT * FROM pizzas WHERE id = ?', [id]);
        if (pizza.length > 0){
            return res.json(pizza[0]);
        }
        res.status(404).json({text: "The pizza doesn't exist"})
    } 

    public async create (req: Request, res: Response): Promise<void> {
        await pool.query('INSERT INTO pizzas set ?', [req.body])
        res.json({text: 'Pizza Saved'});
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const {id} = req.params;
        await pool.query('DELETE FROM pizzas WHERE id = ?', [id]);
        res.json({message: 'Pizza was deleted'})
    }

    public async update(req: Request, res: Response): Promise<void> {
        const {id} = req.params;
        await pool.query('UPDATE pizzas set ? WHERE id = ?', [req.body, id]);
        res.json({message: 'Pizza Updated'})
    }
}

const cardapioController = new CardapioController();
export default cardapioController;
