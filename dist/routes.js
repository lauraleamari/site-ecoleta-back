"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var celebrate_1 = require("celebrate");
var multer_1 = __importDefault(require("multer"));
var multer_2 = __importDefault(require("./config/multer"));
var PointsController_1 = __importDefault(require("./controller/PointsController"));
var ItemsController_1 = __importDefault(require("./controller/ItemsController"));
// opções que utilizamos: index, show, create, update, delete
var routes = express_1.default.Router();
var upload = multer_1.default(multer_2.default);
var pointsController = new PointsController_1.default();
var itemsController = new ItemsController_1.default();
routes.get('/items', itemsController.index);
routes.get('/points', pointsController.index);
routes.get('/points/:id', pointsController.show); //show para listar um único
//upload.single('image') upload de imagem unica, se fosse mais de uma seria array
routes.post('/points', upload.single('image'), celebrate_1.celebrate({
    body: celebrate_1.Joi.object().keys({
        name: celebrate_1.Joi.string().required(),
        email: celebrate_1.Joi.string().required().email(),
        whatsapp: celebrate_1.Joi.number().required(),
        latitude: celebrate_1.Joi.number().required(),
        longitude: celebrate_1.Joi.number().required(),
        city: celebrate_1.Joi.string().required(),
        uf: celebrate_1.Joi.string().required().max(2),
        items: celebrate_1.Joi.string().required(),
    })
}, {
    abortEarly: false,
}), pointsController.create);
exports.default = routes;
