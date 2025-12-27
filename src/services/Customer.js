import axios from "axios"

const baseUrl = "https://localhost:7220/api/customers"

const getAll = () => {
        const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const create = (newCustomer) => {   
    return axios.post(baseUrl, newCustomer)
}

const remove = id => {
    return axios.delete((`${baseUrl}/${id}`))  // {baseUrl} +"/" + {id}
}

export default { getAll, create, remove }