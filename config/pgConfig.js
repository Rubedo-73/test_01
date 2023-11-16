import { readFileSync } from 'fs'
import { resolve } from 'path'

/*
это тестовые данные, нормальные нужно выносить из открытого гита
доступ к ним можно давать через .env
*/

const password = '62I8anq3cFq5GYh2u4Lh'
const user = 'rc1br21uoagjy1t7k77h'
const host = 'mdb.yandexcloud.net'
const port = 6432
const database = 'db1'

const connectionString = `postgres://candidate:${password}@${user}.${host}:${port}/${database}`

const regExp = new RegExp('/([^]*?)/([^]*?)/')
const homeDir = resolve().match(regExp)[0]
const crtPath = homeDir + '.postgresql/root.crt'

const ca = readFileSync(crtPath).toString()

const pgConfig = {
    connectionString,
    ssl: {
        rejectUnauthorized: true,
        ca,
    },
}

export {
    pgConfig
}