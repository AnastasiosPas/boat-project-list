import React from "react";
import './App.css';
import Items from './Components/Items/Items';
import CreateList from './Components/CreateList/CreateList';
import MyLists from './Components/MyLists/MyLists';
import LogIn from './Components/LogIn/LogIn';
import LogOut from './Components/LogOut/LogOut';
import Register from './Components/Register/Register';
import Scroll from './Components/Scroll/Scroll';



class App extends React.Component {
    constructor() {
      super(); 
      
  this.state = { itemsList: [],
                newList: [],
                route: 'login'
  }
    }

onRouteChange = (route) => {
  this.setState ({ route: route
  })
}


onCreate = (checked) => {
    this.setState ({
      createList: [].concat(checked)
    });
    console.log("create list clicked");
  }

  
    render () {

  return (
    <div className="App">
       <div>
         {this.state.route === 'home' ? 
         <div className='navbar' style={{display: 'flex', justifyContent: 'space-evenly'}}>
          <MyLists /> 
          <LogOut onRouteChange={this.onRouteChange}/>
         </div> :
         ( this.state.route === 'register' ) ?  
          <Register onRouteChange={this.onRouteChange}/> :
          <LogIn onRouteChange={this.onRouteChange}/> 

         } 

        </div>
        <div className="body">
          <div id="appTitle">
              <h1 className='title'>Boating Project List</h1>
              {/* <h3>Create your own Repair, Service, Maintainance, 
                or Shopping lists which you can follow, edit and tick-done!
              </h3>  */}
              <h2 className='subtitle'>Register / log in with your email, choose jobs from the lists, add also your own jobs, and then click on, "create your list"</h2>
          </div>
          <div  className='Items'>
            <Scroll>
               <Items />              
            </Scroll>
            <CreateList clickcreate={this.onCreate} />
          </div>
        </div>
        

        <h3 className='footer' >Disclaimer</h3>
    </div>
  );
 }
}

export default App;
