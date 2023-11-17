import { readFileSync } from 'fs'
import { resolve } from 'path'

const confPath = resolve(resolve(), 'src/config/config.json') 
const config = JSON.parse(readFileSync(confPath), null, 2)

const regExp = new RegExp('/([^]*?)/([^]*?)/')
const homeDir = resolve().match(regExp)[0]
const crtPath = homeDir + '.postgresql/root.crt'
const ca = readFileSync(crtPath).toString()

const pgConfig = {
    ...config.test,
    ssl: {
        rejectUnauthorized: true,
        ca,
    },
}

export {
    pgConfig
}