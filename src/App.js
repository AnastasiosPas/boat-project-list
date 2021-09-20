import React from "react";
import './App.css';
import Items from './Components/Items/Items';
import CreateList from './Components/CreateList/CreateList';
import MyLists from './Components/MyLists/MyLists';
import LogIn from './Components/LogIn/LogIn';
import LogOut from './Components/LogOut/LogOut';
import Register from './Components/Register/Register';
import Scroll from './Components/Scroll/Scroll';
// import { boatWorks } from "./Components/Items/boatWorks";
// import {engineItems} from './Components/Items/engineItems';



class App extends React.Component {
    constructor() {
      super(); 
      
  this.state = { itemsList: [],
                newArray: [],
                
                route: 'login'
  }
    }

onRouteChange = (route) => {
  this.setState ({ route: route
  })
}


onCreate = () => {
   const boxes = document.getElementsByClassName('checkboxItems');
 console.log(boxes)
   //  function checkChecked(array, i) {
  //   return array[i].checked;
  // }
  //  const filteredArray = boxes.filter(checkChecked);
  //  this.setState ({ newArray: filteredArray
  //  })
    }

    

  // checkedBoatworks = (array, i) => { 
  //   let myArray = [];
  //   if (document.getElementsByClassName(checkboxItems).checked === true) {
  //     myArray.push(array[i]); 
  //     }      
  //     return console.log(myArray)
  // }
  

  
    render () {

  return (
    <div className="App">
       <div>
         {this.state.route === 'home' ? 
         <div className='navbar'>
          <MyLists style={{cursor: 'pointer'}}/> 
          <LogOut onRouteChange={this.onRouteChange}/> 
          <button className="btn login username form-control" ><a href="mailto: captain@oneplaceboating.com"  style={{textDecoration: 'none', color:'gold'}}>E-mail Us</a>
          </button>
         </div> :
         ( this.state.route === 'register' ) ?  
         <div  className='navbar' style={{display: 'grid', gridTemplateColumns: '9fr 1fr', alignItems:'center', marginLeft: '55px'}}>
           <Register onRouteChange={this.onRouteChange}/> 
           <button className="btn login username form-control" ><a href="mailto: captain@oneplaceboating.com"  style={{textDecoration: 'none', color:'gold'}}>E-mail Us</a>
          </button>
         </div>
         :
         <div className='navbar' style={{display: 'grid', gridTemplateColumns: '9fr 1fr', alignItems:'center', marginLeft: '55px'}}>
          <LogIn onRouteChange={this.onRouteChange}/> 
          <button style={{justifySelf: 'end'}} className="btn login username form-control" ><a href="mailto: captain@oneplaceboating.com"  style={{textDecoration: 'none', color:'gold'}}>E-mail Us</a>
          </button>
</div>

         } 

        </div>
        <div className="body">
          <div id="appTitle">
              <h1 className='title'>Boating Project List</h1>

              <h2 className='subtitle'>Register / log in , choose jobs from the lists, add also your own jobs, and then click on, "create your list"</h2>
          </div>
          <div  className='Items'>
            <Scroll>
               <Items />              
            </Scroll>
            <CreateList createList={this.onCreate}/>
          </div>
        </div>
        

        <h3 className='footer' >Disclaimer</h3>
    </div>
  )
 }
}

export default App;
