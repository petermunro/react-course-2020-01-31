import React, { useState } from "react";
import PropTypes from "prop-types";
import Address from "./Address";

const Contact = ({ name, email, address }) => {
  let [expanded, setExpanded] = useState(true);

  return (
    <div>
      <h3 onClick={() => setExpanded(isExpanded => !isExpanded)}>{name}</h3>
      {expanded && (
        <div>
          <p>{email}</p>
          <Address address={address} />
        </div>
      )}
    </div>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string,
  address: PropTypes.object
};

export default Contact;
