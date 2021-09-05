import React from "react";
import './App.css';
import Items from './Components/Items/Items';
import CreateList from './Components/CreateList/CreateList';
import MyLists from './Components/MyLists/MyLists';
import LogIn from './Components/LogIn/LogIn';
import Register from './Components/Register/Register';
import Contact from './Components/Contact/Contact';





class App extends React.Component {
  constructor() {
    super(); 
    
this.state = {

}

  }

  
    render () {
  return (
    <div className="App">
        <div>
          <span className="navbar">
           <CreateList />
           <MyLists />
           <LogIn />
           <Register /> 
           <Contact /> 
          </span>
        </div>
        <div className="body">
          <div id="appTitle">
              <h1>Boating/Sailing Project List</h1>
              <h3>Create your own Repair, Service, Maintainance, 
                or Shopping lists which you can follow, edit and tick-done!
              </h3> 
          </div>
          <br/>
          <form method='GET' className='Items'>
            <Items />
          </form>
        </div>
        

        <h3>Disclaimer</h3>
    </div>
  );
 }
}

export default App;
