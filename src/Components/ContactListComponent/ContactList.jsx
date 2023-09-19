import "./ContactListStyles.css";
import { Link } from "react-router-dom";
import Contact from "./Contact";
import { useState, useEffect } from "react";
import getContactService from "../../services/getContactService";
import DeleteContactService from "../../services/DeleteContactService";
const ContactList = ({}) => {
  const [contacts, setContacts] = useState(null);
  const [Allcontacts, setAllContacts] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const searchHandler = (e) => {
    setSearchTerm(e.target.value);
    const search = e.target.value;

    if (search !== "") {
      const filteredItem = Allcontacts.filter((c) => {
        return Object.values(c)
          .join(" ")
          .toLowerCase()
          .includes(search.toLowerCase());
      });
      setContacts(filteredItem);
    } else {
      setContacts(Allcontacts);
    }
  };

  useEffect(() => {
    const getContacts = async () => {
      const { data } = await getContactService();
      setContacts(data);
      setAllContacts(data);
    };
    try {
      getContacts();
    } catch (err) {
      console.log(err);
    }
  }, []);
  const deleteContactHandler = async (id) => {
    try {
      await DeleteContactService(id);
      const FilteredContact = contacts.filter((contact) => contact.id !== id);
      setContacts(FilteredContact);
    } catch (error) {}
  };
  return (
    <section className="Contact-list-section">
      <div className="listHeader">
        <h2>Contacts</h2>
        <input type="text"  placeholder="Search..." onChange={searchHandler} value={searchTerm} />
        <Link className="add-button" to="/add">
          Add
        </Link>
      </div>
      {contacts ? (
        contacts.map((contact) => {
          return (
            <Contact
              key={contact.id}
              contacts={contact}
              deleteContactHandler={deleteContactHandler}
            />
          );
        })
      ) : (
        <p>Loading...</p>
      )}
    </section>
  );
};

export default ContactList;
