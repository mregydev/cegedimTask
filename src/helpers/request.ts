import axios, { Method } from 'axios'

export default (url: string, method: Method, data: object) => {
    return axios({
        url,
        method,
        timeout: Number(process.env.API_TIMEOUT),
        data
    })
}