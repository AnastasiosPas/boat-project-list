import React from "react";
import { boatWorks } from "./boatWorks";
import {engineItems} from './engineItems';
import List from '../List/List';
import './Items.css';




class Items extends React.Component {
  
  constructor () {
    super ();

    this.state = {
      input: "",
      addedItem: []
    }
  }
 
       onInputChange = (event) => {
      this.setState({input: event.target.value});
    }
  

    onButtonSubmit1 = () => {
      this.setState({ addedItem:  this.state.input,
                      });
            engineItems.push(this.state.input);
            this.setState({input: ''});
                    }     
      
    onButtonSubmit2 = () => {
      this.setState({ addedItem:  this.state.input,     
                      });
            boatWorks.push(this.state.input);
            this.setState({input: ''});
                    }     

    render () {

  return (

  <div className='container' >

      <div className='engineItems ' >
        <h3>Engine items</h3>
        <div> 
          <List array={ engineItems }/>
            
            <input id='userinput' onChange={this.onInputChange} 
                    type='text' 
                    value={this.state.input} 
                    placeholder='Add an item'/>
            <button id='enter' onClick={this.onButtonSubmit1}>Add
            </button>
        </div>
      </div>

      <div className='boatWorks'>
        <h3>Boat works and checks</h3>
        <div>
          <List array= {boatWorks} />
            <input id='userinput2' 
                    onChange={this.onInputChange} 
                    type='text' value={this.state.input} 
                    placeholder='Add an item'/>
            <button id='enter2' onClick={this.onButtonSubmit2}>Add
            </button>
        </div>
      </div>

  </div>

      )
  }
    
}
    

export default Items;
