import { useState } from "react";
import { db } from "./firebase-config";
import { collection, addDoc } from "firebase/firestore";
import "./style/Form.css";

export default function Form() {
    const [newName, setNewName] = useState("");
    const [newSurname, setNewSurname] = useState("");
    const [newEmail, setNewEmail] = useState("");
    const usersCollectionRef = collection(db, "users");

    function setName(event){
        setNewName(event.target.value);
    }
    function setSurname(event){
        setNewSurname(event.target.value);
    }
    function setEmail(event){
        setNewEmail(event.target.value);
    }
    async function handleSubmit(event){
        event.preventDefault();
        await addDoc(usersCollectionRef, {name: newName, surname: newSurname, email: newEmail});
    }

  return (
      <form onSubmit={handleSubmit} className="Form">
          <label for="name">First name:</label><br />
          <input type="text" id="name" onChange={setName}/><br />
          <label for="surname">Last name:</label><br />
          <input type="text" id="surname" onChange={setSurname}/><br />
          <label for="email">Email:</label><br />
          <input type="email"id="email" onChange={setEmail} /><br />
          <button type="submit">Submit</button>
      </form>
  );
}