import React from "react";
import PropTypes from "prop-types";

const Address = props => {
  if (!props.address) return null;
  // const address = props.address || {};
  return (
    <div>
      <p>{props.address.line1}</p>
      <p>{props.address.town}</p>
      <p>{props.address.county}</p>
      <p>{props.address.country}</p>
    </div>
  );
};

Address.propTypes = {
  address: PropTypes.shape({
    line1: PropTypes.string.isRequired,
    town: PropTypes.string,
    county: PropTypes.string,
    country: PropTypes.string
  }).isRequired
};

export default Address;
