"use strict";
module.exports = {
    client: 'postegres',
    connection: {
        host: process.env.DB_HOST,
        database: process.env.DB_DATABASE,
        user: process.env.DB_USER,
        password: process.env.DB_PASS
    },
    migrations: {
        tableName: 'knex_migrations',
        directory: __dirname + "/src/database/migrations"
    },
    seeds: {
        tableName: 'knex_seeds',
        directory: __dirname + "/src/databaseseeds"
    },
    useNullAsDefault: true
}; //não podemos utilizar a sintaxe default
