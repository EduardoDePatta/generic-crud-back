"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class CardapioController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const pizzas = yield database_1.default.query('SELECT * FROM pizzas');
            res.json(pizzas);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const pizza = yield database_1.default.query('SELECT * FROM pizzas WHERE id = ?', [id]);
            if (pizza.length > 0) {
                return res.json(pizza[0]);
            }
            res.status(404).json({ text: "The pizza doesn't exist" });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO pizzas set ?', [req.body]);
            res.json({ text: 'Pizza Saved' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM pizzas WHERE id = ?', [id]);
            res.json({ message: 'Pizza was deleted' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE pizzas set ? WHERE id = ?', [req.body, id]);
            res.json({ message: 'Pizza Updated' });
        });
    }
}
const cardapioController = new CardapioController();
exports.default = cardapioController;
