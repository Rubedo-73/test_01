import { Pool } from 'pg'
import { pgConfig } from '../../config/pgConfig'

// по задаче не подразумевается что будут паралельные подключения к бд 
// но в реале почти всегда будет пул соединений
const pool = new Pool(pgConfig);


