import { useState } from "react";
import "./AddContact.css";
import { HistoryRouterProps, useLocation, useNavigate } from "react-router-dom";
import { createBrowserHistory } from "@remix-run/router";
import AddContactService from "../../services/AddContactService";
const AddContact = ({ addContactHandler }) => {
  const navigate = useNavigate(); 
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
      const { data } = await AddContactService(contact);
      setContacts([...contact, data]);
    } catch (err) {}
    setContact({ name: "", email: "" });
    navigate("/");
  };
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
      <button type="submit">Add Contact</button>
    </form>
  );
};

export default AddContact;
