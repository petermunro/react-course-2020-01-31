import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Footer from "./components/Footer";
import ContactListContainer from "./components/ContactListContainer";
import ClickDemo from "./components/ClickDemo";
import Counter from "./components/Counter";
import StarRating from "./components/StarRatingComp";
import UseEffectDemo from "./components/UseEffectDemo";
import "./App.css";
import FormDemo from "./components/FormDemo";
import TweetBox from "./components/TweetBox";

function handleSend(message) {
  console.log("Sending message:", message);
}

function App() {
  /* 
 * // This example showed how to add a new contact
  function getRandomId() {
    return Math.floor(Math.random() * 10000);
  }

  function addContact() {
    let newContact = {
      id: getRandomId(),
      fullName: "Shawn Smith",
      name: {
        firstName: "Shawn",
        lastName: "Smith"
      },
      address: {
        line1: "31 The Grange",
        town: "Upper Chipping",
        county: "Gloucestershire",
        country: "England"
      },
      email: "shawn@example.com"
    };
    // setContacts([...contacts, newContact]);
  }
*/

  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <nav>
            <ul>
              <li>
                <Link to="/click">Click</Link>
              </li>
              <li>
                <Link to="/form">Form</Link>
              </li>
              <li>
                <Link to="/useeffect">UseEffect</Link>
              </li>
              <li>
                <Link to="/contacts">Contacts</Link>
              </li>
              <li>
                <Link to="/tweet">Tweet</Link>
              </li>
              <li>
                <Link to="/counter">Counter</Link>
              </li>
              <li>
                <Link to="/star">Star</Link>
              </li>
            </ul>
          </nav>

          <Route path="/contacts">
            <ContactListContainer />
          </Route>

          <Route path="/click">
            <ClickDemo />
          </Route>

          <Route path="/form">
            <FormDemo />
          </Route>

          <Route path="/useeffect">
            <UseEffectDemo />
          </Route>

          <Route path="/tweet">
            <TweetBox onSend={handleSend} />
          </Route>

          <Route path="/counter">
            <Counter />
          </Route>

          <Route path="/star">
            <StarRating />
          </Route>
        </Router>
      </header>
      <Footer>
        <ul>
          <li>About</li>
          <li>Home</li>
          <li>Products</li>
          <li>Support</li>
        </ul>
      </Footer>
    </div>
  );
}

export default App;
