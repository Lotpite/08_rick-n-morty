import axios from "axios";

const BASE_URL = "https://rickandmortyapi.com/api/"

export const apiRequest = async ({ method = 'GET', url, data, params }) => {
    return await axios({
            method,
            url: BASE_URL + url,
            data,
            params,
        })
        .then(res => res.data)
        .catch(err => {
            return undefined
        })
}