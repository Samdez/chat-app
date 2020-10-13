import React from "react";
import PropTypes from "prop-types";
import "./Contact.css";

const Contact = (props) => {
  return (
    <div className="Contact">
      <img className="avatar" src={props.avatar} />
      <div>
        <div className="name">{props.name}</div>
        <div className="status">
          <div
            className={props.online ? "status-online" : "status-offline"}
          ></div>
          <div className="status-text">
            {props.online ? "online" : "offline"}
          </div>
        </div>
      </div>
    </div>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  online: PropTypes.bool
};
export default Contact;
