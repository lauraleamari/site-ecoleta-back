"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var knex_1 = __importDefault(require("knex"));
var connection = knex_1.default({
    client: 'pg',
    connection: {
        host: process.env.DB_HOST,
        database: process.env.DB_DATABASE,
        user: process.env.DB_USER,
        password: process.env.DB_PASS
    },
    migrations: {
        directory: __dirname + "/src/database/migrations"
    },
    seeds: {
        directory: __dirname + "/src/databaseseeds"
    },
});
exports.default = connection;
