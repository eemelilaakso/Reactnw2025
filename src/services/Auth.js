import axios from 'axios'

//const baseUrl = "https://localhost:7220/api/Authentication"
const baseUrl = "https://nweemeli-dqegc4f0h6b7dmd0.canadacentral-01.azurewebsites.net/api/authentication"

const authenticate = (userForAuth) => {
    const request = axios.post(baseUrl, userForAuth)
    return request.then(response => response)
}

export default { authenticate }