import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [person, setPerson] = useState(data)
  return <div className="container">
    <h1>{person.length} birthday today</h1>
    <List person={person} />
    <button onClick={() => setPerson([])}>Clear All</button>
  </div>;
}

export default App;
