import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
const ContactDetail = () => {
    const location = useLocation();
    const contacts = location.state
    const {name , email , id} = contacts
    return ( <div>
        <p>Name  : {name}</p>
        <p>Email : {email}</p>
        <p> <small>Detail</small> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem, enim.</p>
        <Link to='/'  >Back</Link>
    </div> );
}
 
export default ContactDetail;