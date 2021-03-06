import Axios from 'axios';


const base_uri = Axios.create({
  baseURL: "http://localhost:5000/"
})

export default base_uri;