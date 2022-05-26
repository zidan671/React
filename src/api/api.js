import axios from "axios"



const axiosInstance = axios.create({
  baseURL:'https://social-network.samuraijs.com/api/1.0/',
  withCredentials:true,
  headers:{'API-KEY':'6a4e30ba-c42b-4053-9418-6bbcc09ca240'}

})

export const userAPI = {

getUsers (currentPage = 1,pageSize = 10) {
  return axiosInstance.get(`users?page=${currentPage}&count=${pageSize}`)
  .then(response => response.data)
},

setUnfollow (friend) {
  return axiosInstance.delete(`follow/${friend.id}`) 
  .then(response => response.data)
},

setFollow (friend)  {
  return axiosInstance.post(`follow/${friend.id}`, {}) 
  .then(response => response.data)
  },

setAuth ()  {
  return axiosInstance.get(`auth/me`)
  .then(response => response.data)

},
}