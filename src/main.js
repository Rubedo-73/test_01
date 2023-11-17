import { pool } from "./postgresql/pgConnent.js";
import {
    getTabels,
    createMainTable
} from "./postgresql/reqSQL/index.js";

const getData = async function (query) {
    console.log(query, '<<<query>>>');
    const data = await pool.query(query)
    console.log(data, '<<<data>>>');

    return data
}

getData(getTabels)
