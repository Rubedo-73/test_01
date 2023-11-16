const createMainTable = `CREATE TABLE test_01 (
    id SERIAL PRIMARY KEY,
    name CHARACTER VARYING(50),
    data jsonb,
);`

export {
    createMainTable
}