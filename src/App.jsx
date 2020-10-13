import React from "react";
import Contact from "./components/Contact";
import ContactList from "./components/ContactList";

function App() {
  return (
    <div className="App">
      <Contact
        name="Kanye PervWest"
        avatar="https://randomuser.me/api/portraits/men/63.jpg"
        online
      />
      <Contact
        name="Snoop Rabbit"
        avatar="https://randomuser.me/api/portraits/men/2.jpg"
      />
      <Contact
        name="Live LaughLove"
        avatar="https://randomuser.me/api/portraits/women/66.jpg"
        online
      />
      <ContactList />
    </div>
  );
}

export default App;
