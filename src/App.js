import React from "react";
import './App.css';
import Items from './Components/Items/Items';
import CreateList from './Components/CreateList/CreateList';
import MyLists from './Components/MyLists/MyLists';
import LogIn from './Components/LogIn/LogIn';
import Register from './Components/Register/Register';
import Contact from './Components/Contact/Contact';
import Scroll from './Components/Scroll/Scroll';






class App extends React.Component {
    constructor() {
      super(); 
      
  this.state = { itemsList: [],
                createList: false
  }
    }

  onClickCreate = () => {
    this.setState ({
      createList: true
    });
    console.log("create list clicked");
    
  }


  
    render () {
  return (
    <div className="App">
        <div className="topbar">
          <span className="navbar">
           <MyLists />
           <LogIn />
           <Register /> 
           <Contact /> 
          </span>
        </div>
        <div className="body">
          <div id="appTitle">
              <h1>Boating Project List</h1>
              {/* <h3>Create your own Repair, Service, Maintainance, 
                or Shopping lists which you can follow, edit and tick-done!
              </h3>  */}
              <h2>Register / log in with your email, choose jobs from the lists, add also your own jobs, and then click on, "create your list"</h2>
          </div>
          <div  className='Items'>
            <Scroll>
               <Items />
            </Scroll>
            <CreateList clickcreate={this.onClickCreate} />
          </div>
        </div>
        

        <h3 className='footer' >Disclaimer</h3>
    </div>
  );
 }
}

export default App;
