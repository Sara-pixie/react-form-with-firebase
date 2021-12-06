import { useState, useEffect } from "react";
import { db } from "./firebase-config";
import { collection, getDocs } from "firebase/firestore";
import TableLine from "./TableLine";
import "./style/Table.css";

export default function Table() {
    const [users, setUsers] = useState([]);
    const usersCollectionRef = collection(db, "users");
    useEffect(() =>{
        
        const getUsers = async() =>{
            const data = await getDocs(usersCollectionRef);
            setUsers(data.docs.map((doc)=>({ ...doc.data(), id: doc.id })));
        };
        getUsers();
    });

    return (
    <table className="Table">
      <tr>
          <th>Name</th>
          <th>Surname</th>
          <th>Email</th>
      </tr>
      {users.map(function(user, index){
          return (
            <TableLine index={index} user={user}/>
          );
      })}
    </table>
  );
}