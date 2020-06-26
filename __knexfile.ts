// Para criar o banco em dev no postgres

module.exports = {
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        database: 'postgres',
        port:'5432',
        user: 'postgres',
        password: '123456'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
        directory: __dirname + '/src/database/migrations',
    },
    seeds: {
        directory: __dirname + '/src/database/seeds',
    }
};
