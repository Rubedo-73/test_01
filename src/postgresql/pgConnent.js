import pg from 'pg'
import { pgConfig } from '../config/pgConfig.js';

const pool = new pg.Pool(pgConfig);

export {
    pool,
}