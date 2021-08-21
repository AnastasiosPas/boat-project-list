import React from "react";
// import { boatWorks } from "../Items/boatWorks";
// import {engineItems} from '../Items/engineItems';


class CreateItem extends React.Component {

    constructor () {
      super ();

      this.state = {
        input: "",
        newItem: ""
      }
    }
    

         onInputChange = (event) => {
        this.setState({input: event.target.value});
        console.log('it inputs');

      }
    
   
         onButtonSubmit = () => {
        this.setState({ newItem: this.state.input                  
                        });
        console.log("It clicks");
        }
         

    
      render () {

      
    return (
    <div className="CreateItem">
          <li>
            <input type="checkbox"/>{this.state.newItem}
          </li>    
        <input id='userinput' onChange={this.onInputChange} type='text' placeholder='Add an item'/>
        <button id='enter' onClick={this.onButtonSubmit}>Add</button>
    </div>
    
       
)
}
}

export default CreateItem;


