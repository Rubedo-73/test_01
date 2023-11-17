const createMainTable = `CREATE TABLE test_01 (
    id SERIAL PRIMARY KEY,
    name CHARACTER VARYING(50),
    data jsonb,
);`

const getTabels = `SELECT * FROM pg_catalog.pg_tables;`

export {
    createMainTable,
    getTabels,
}