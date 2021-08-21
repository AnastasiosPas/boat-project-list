import React from "react";
import { boatWorks } from "./boatWorks";
import {engineItems} from './engineItems';
import './Items.css';
import CreateItem from '../CreateItem/CreateItem';
// import AddEngineItem from '../AddEngineItem/AddEngineItem';




function Items() {
    const renderEngineItems = engineItems.map(i => <li key = {i}><input type="checkbox"/>{i}</li>); 
    const renderBoatWorks =     boatWorks.map(j => <li key = {j}><input type="checkbox"/>{j}</li>); 
    
//<button onclick="parentNode.remove();">Delete</button>

    return (
      <div className='container'>
          
          <h3>Engine items</h3>
          <ul className='engineItems' >
            {renderEngineItems}
            <CreateItem />

          </ul>

          <h3>Boat works and checks</h3>

          <ul className='boatWorks'>
            {renderBoatWorks}
            <CreateItem />
          </ul>

      </div>
      );
    };







export default Items;