import http from "./httpsService";

const AddContactService = (data) => {
    return http.post('/contacts', data)
}
 
export default AddContactService;