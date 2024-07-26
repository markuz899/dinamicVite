import { useParams } from "react-router-dom";

const ContactDetail = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>Contact ID: {id}</h1>
    </div>
  );
};

export default ContactDetail;
