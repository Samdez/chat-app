import React from "react";
import PropTypes from "prop-types";
import "./Contact.css";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      online: props.online
    }
  }

  render() {
    return (
      <div className="Contact">
        <img className="avatar" src={this.props.avatar} alt={this.props.name} />
        <div>
          <div className="name">{this.props.name}</div>
          <div
            className="status"
            onClick={(e) => {
              const newStatus = !this.state.online;
              this.setState({ online: newStatus });
            }}
          >
            <div
              className={this.state.online ? "status-online" : "status-offline"}
            ></div>
            <div className="status-text">
              {this.state.online ? "online" : "offline"}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  online: PropTypes.bool,
};
export default Contact;
