import http from "./httpsService";

const GetOneContact = (id) => {
    return http.get(`/contacts/${id}`)
}
 
export default GetOneContact;