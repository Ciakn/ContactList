import http from "./httpsService";

const DeleteContactService = (id) => {
    return http.delete(`contacts/${id}`)
}
 
export default DeleteContactService;