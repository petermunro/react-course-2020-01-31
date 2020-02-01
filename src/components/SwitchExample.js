import React from "react";
import PropTypes from "prop-types";

const SwitchExample = props => {
  let para = <p>No participants specified</p>;
  switch (props.howMany) {
    case undefined:
      para = <p>Specify a number of participants</p>;
      break;
    case 1:
      para = (
        <p>
          <b>Perfect</b>
        </p>
      );
      break;
    case 2:
      para = <p>Two is company</p>;
      break;
    case 3:
      para = (
        <p>
          <i>Three</i> is a crowd
        </p>
      );
      break;
    case 4:
      para = <p>Four is OK</p>;
      break;
    default:
      para = <p>Too many participants</p>;
      break;
  }
  return <div>{para}</div>;
};

SwitchExample.propTypes = {
  howMany: PropTypes.number.isRequired
};

export default SwitchExample;
