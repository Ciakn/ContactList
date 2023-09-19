import { useEffect, useState } from "react";
import { Await, Route, Routes } from "react-router-dom";
import "./App.css";
import AddContact from "./Components/AddContactComponent/AddContact";
import axios from "axios";
import ContactList from "./Components/ContactListComponent/ContactList";

import ContactDetail from "./ContactDetail/ContactDetail";

import EditContact from "./Components/EditContact/EditContact";

const App = () => {
  return (
    <div className="App">
      <h1>Contact App</h1>
      <Routes>
        <Route path="/add" element={<AddContact />} />
        <Route path="/" element={<ContactList />} />
        <Route path="/user/:id" element={<ContactDetail />} />
        <Route path="/edit/:id" element={<EditContact />} />
      </Routes>
    </div>
  );
};

export default App;
