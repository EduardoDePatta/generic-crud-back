"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cardapioController_1 = __importDefault(require("../controllers/cardapioController"));
class CardapioRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', cardapioController_1.default.list);
        this.router.get('/:id', cardapioController_1.default.getOne);
        this.router.post('/', cardapioController_1.default.create);
        this.router.delete('/:id', cardapioController_1.default.delete);
        this.router.put('/:id', cardapioController_1.default.update);
    }
}
const cardapioRoutes = new CardapioRoutes();
exports.default = cardapioRoutes.router;
