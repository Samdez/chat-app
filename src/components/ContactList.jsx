import React from "react";
import Contact from "./Contact";

const users = [
  {
    name: "Robert Rilès",
    avatar: "https://randomuser.me/api/portraits/men/28.jpg",
  },
  {
    name: "Nellie CaldwellplayedMrBond",
    avatar: "https://randomuser.me/api/portraits/women/17.jpg",
    online: true,
  },
  {
    name: "Vernon Masonofabitch",
    avatar: "https://randomuser.me/api/portraits/men/84.jpg",
  },
  {
    name: "Erica Hunterminator",
    avatar: "https://randomuser.me/api/portraits/women/87.jpg",
    online: true,
  },
  {
    name: "Juanita Sony",
    avatar: "https://randomuser.me/api/portraits/women/55.jpg",
  },
];

const ContactList = () => (
  <div>
    {users.map((user) => (
      <Contact
        avatar={user.avatar}
        name={user.name}
        online={user.online}
        key={user.name}
      />
    ))}
  </div>
);

export default ContactList;
