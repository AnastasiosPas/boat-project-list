import React, { useState } from "react";
import { boatWorks } from "./boatWorks";
import {engineItems} from './engineItems';
import Item from '../Item/Item';
import './Items.css';




const Items =  () => {
  const [itemInput, setItemInput] = useState('')
 

   const onInputChange = (event) => {
        setItemInput(event.target.value);
    }


  return (

  <div className='container' >

      <div className='engineItems ' >
        <h3>Engine items</h3>
        <div> {engineItems.map((item) => <Item item={item}/>)}
        
            
            <input id='userinput' onChange={onInputChange} 
                    type='text' 
                    value={itemInput} 
                    placeholder='Add an item'/>
            <button id='enter' onClick={() => {
    setItemInput(itemInput);
            engineItems.push(itemInput);
            setItemInput('');
                    }   }>Add
            </button>
        </div>
      </div>

      <div className='boatWorks'>
      <h3>Boat works / checks</h3>
        <div> {boatWorks.map((item) => <Item item={item}/>)}
        <input id='userinput' onChange={onInputChange} 
                    type='text' 
                    value={itemInput} 
                    placeholder='Add an item'/>
            <button id='enter' onClick={() => {
                    setItemInput(itemInput);
                    boatWorks.push(itemInput);
            setItemInput('');} }
            >Add</button>
        </div>
      </div>

  </div>

      )
  }
    
    

export default Items;