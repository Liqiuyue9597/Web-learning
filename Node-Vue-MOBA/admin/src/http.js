import axios from 'axios'

const http = axios.create({
  baseURL: 'http://localhost:3130/admin/api'
})

export default http