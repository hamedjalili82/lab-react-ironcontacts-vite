import { useState } from "react";
import "./App.css";
import contactsJSON from "./contacts.json";

function App() {
  const [contacts, setContacts] = useState(contactsJSON.slice(0, 5));
  const [remaining, setRemaining] = useState(contactsJSON.slice())

function randomContact(){
    const random = Math.round(Math.random() * remaining.length)
    const contact = remaining.splice(random, 1)[0]
    console.log(remaining.length) 
    setContacts([...contacts, contact])
}


  return (
    
    <div className="App">
      <h1>LAB | React IronContacts</h1>

      <button onClick = {randomContact}>
      Add Random Contact
      </button>

      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((oneContact) => {
            return (
              <tr key = {oneContact.id}>
                <td>
                  <img 
                  src={oneContact.pictureUrl} 
                  alt={oneContact.name} 
                  style={{height: "200px"}}
                  />
                </td>
                <td>
                  <h3> {oneContact.name} </h3>
                </td>
                <td>
                  <h3>{oneContact.popularity}</h3>
                </td>
                <td>
                  <h3>{oneContact.wonOscar && "🏆"}</h3>
                </td>
                <td>
                  <h3>{oneContact.wonEmmy && "🏆"}</h3>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
