import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { createBrowserHistory } from "@remix-run/router";
import { useEffect } from "react";
import getContactService from "../../services/getContactService";
import UpdateContact from "../../services/UpdateContactService";
import GetOneContact from "../../services/GetOneContactService";
const EditContact = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const contac = location.state;

  console.log(contac);
  const [contact, setContact] = useState({ name: "", email: "" });
  const changeHandler = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const submitForm = async (e) => {
    if (!contact.name || !contact.email) {
      alert("All Fileds are madentory");
      return;
    }
    e.preventDefault();
    try {
      await UpdateContact(contac.id, contact);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
   
  };
  useEffect(() => {
    try {
      const editContact = async () => {
        const { data } = await GetOneContact(contac.id);
        setContact({ name: data.name, email: data.email });
      };
      editContact();
    } catch (error) {}
  }, []);
  return (
    <form
      onSubmit={submitForm}
      action="
    "
    >
      <div>
        <label htmlFor="name">name</label>
        <input
          id="name"
          type="text"
          name="name"
          value={contact.name}
          onChange={changeHandler}
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          value={contact.email}
          onChange={changeHandler}
        />
      </div>
      <button type="submit">Done</button>
    </form>
  );
};

export default EditContact;
