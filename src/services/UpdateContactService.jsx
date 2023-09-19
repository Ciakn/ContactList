import http from "./httpsService";

const UpdateContact = (id, data) => {
  return http.put(`/contacts/${id}`, data);
};

export default UpdateContact;
