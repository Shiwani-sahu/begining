import React from 'react'
import "./App.css";
import Name from "./Client/Name";
import Picture from "./Components/Picture";
const App = () => {
  return (
    <div>
    <Picture />
    <div>
    {Name.name}
    </div>
    <div>
    {Name.department}
    </div>
    <div>
    {Name.university}
    </div> 
   </div>
  )
}

export default App;