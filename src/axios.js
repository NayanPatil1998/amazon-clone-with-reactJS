import axios from "axios";

const instance = axios.create({
    baseURL: "https://amazon-clone-backend-payment.herokuapp.com/api"
})


export default instance;