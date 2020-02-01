import React, { useState, useEffect } from "react";
import ContactList from "./ContactList";

function ContactListContainer() {
  let [contacts, setContacts] = useState([]);
  let [loading, setLoading] = useState(true);
  let url = "/contacts.json";

  /* Note on Cancellation
   *
   * The original code was this:
   */

  /* 
  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => setContacts(data))
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  }, [url]);
   */

  /*
   * Try the above `useEffect()` call instead of the code below. Then select
   * 'Slow 3G' in the 'Throttling' menu in Chrome devtools, and switch from the
   * app's 'Contacts' tab to say 'Tweet'. You should see this:
   *
   *   Warning: Can't perform a React state update on an unmounted component.
   *   This is a no-op, but it indicates a memory leak in your application. To
   *   fix, cancel all subscriptions and asynchronous tasks in a useEffect
   *   cleanup function.
   *     in ContactListContainer (at App.js:75)
   *
   * Because we're now switching away from the ContactListContainer tab, that
   * component is being 'unmounted' (removed from React and the DOM). Consequently,
   * when the response eventually arrives and we call either setContacts()
   * or setLoading(), there is no component to set the state for and React
   * displays the error message.
   *
   * To get around this, we have various options, including using an AbortController
   * (which for me didn't work reliably), or simply not updating state on an
   * unmounted component, which is what I chose to do here.
   *
   * So the code below uses a variable `isCancelled`. We only update state
   * if the network call hasn't been 'cancelled' (though we don't actually cancel
   * it).
   *
   * The callback returned from `useEffect()` is a "clean-up" function
   * (see https://reactjs.org/docs/hooks-reference.html#cleaning-up-an-effect),
   * which runs before the component is removed from the UI.
   *
   * We use this to set the 'isCancelled' flag to true, preventing any further
   * state updates.
   *
   * For more information, see either of these:
   * - https://stackoverflow.com/questions/56442582/react-hooks-cant-perform-a-react-state-update-on-an-unmounted-component
   * - https://www.robinwieruch.de/react-warning-cant-call-setstate-on-an-unmounted-component
   */

  useEffect(() => {
    let isCancelled = false;
    fetch(url)
      .then(response => response.json())
      .then(data => !isCancelled && setContacts(data))
      .catch(error => console.error(error))
      .finally(() => !isCancelled && setLoading(false));
    return () => {
      isCancelled = true;
    };
  }, [url]);

  return (
    <div>
      <p>{loading && "Loading..."}</p>
      <div>{contacts && <ContactList contacts={contacts} />}</div>
    </div>
  );
}

export default ContactListContainer;
