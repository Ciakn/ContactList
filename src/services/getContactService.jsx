import http from "./httpsService"

const getContactService = () => {
   return http.get(`/contacts`)
}
 
export default getContactService