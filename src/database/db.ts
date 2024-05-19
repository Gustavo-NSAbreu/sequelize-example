import Knex from "knex";

const databaseOptions = {
  client: 'postgresql',
  connection: {
    host: 'knex-example-database',
    port: 5432,
    database: 'knex_example',
    user: 'postgres',
    password: 'postgres'
  },
  pool: {
    min: 2,
    max: 10
  },
  debug: true
};

export const knex = Knex(databaseOptions);