import axios from "axios"
//for crud opertions using json server
export default axios.create({
    baseURL:"http://localhost:3006/" //mounting it to the json-server
})