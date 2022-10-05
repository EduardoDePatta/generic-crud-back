import { Router } from 'express';
import cardapioController from '../controllers/cardapioController';

class CardapioRoutes {
    
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', cardapioController.list);
        this.router.get('/:id', cardapioController.getOne);
        this.router.post('/', cardapioController.create);
        this.router.delete('/:id', cardapioController.delete);
        this.router.put('/:id', cardapioController.update);
    }
}

const cardapioRoutes = new CardapioRoutes();
export default cardapioRoutes.router;