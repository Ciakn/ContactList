import userImage from "../../assets/imgs/images.png";
import './ContactList'
import { Link } from "react-router-dom";

const Contact = ({ contacts, deleteContactHandler }) => {
  const { name, email, id } = contacts;

  return (
    <div className="contact" key={id}>
      <div
        className="userPart"
        style={{ display: "flex", alignItems: "center" }}
      >
        <img src={userImage} alt="user-photo" />
        <Link to={`user/${id}`} state={contacts}>
          <p>name :{name} </p>
          <p>email : {email}</p>
        </Link>
      </div>

      <div>
        <Link className="edit" to={`/edit/${id}`} state = {contacts}>Edit</Link>

        <button className="delete" onClick={() => deleteContactHandler(id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Contact;
