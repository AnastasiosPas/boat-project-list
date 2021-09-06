import React from "react";
import { boatWorks } from "./boatWorks";
import {engineItems} from './engineItems';
import './Items.css';
// import "animate.css";

//import CreateItem from '../CreateItem/CreateItem';
//import AddEngineItem from '../AddEngineItem/AddEngineItem';

 


function Items() {
    const renderEngineItems = engineItems.map(i => <label className="listings" htmlFor={i} key = {i}><input type="checkbox" name={i}/>{i} <div className="action">Started</div> <input type="radio" name='progress'/>   <div className="action">Done</div><input type="radio" name='progress' /></label>); 
    const renderBoatWorks =     boatWorks.map(j => <label className="listings" htmlFor={j} key = {j}><input type="checkbox" name={j}/>{j} <div className="action">Started</div> <input type="radio" name='progress'/>   <div className="action">Done</div><input type="radio" name='progress' /></label>); 



    return (
      <div>
          <div className='container' >
              <div className='engineItems '>
              <h3>Engine items</h3>
                  {renderEngineItems}
                  {/* <CreateItem /> */}
              </div>

              <div className='boatWorks'>
              <h3>Boat works and checks</h3>
                {renderBoatWorks}
                {/* <CreateItem /> */}
              </div>
          </div>
 
          <br/>
        <input type='submit' className='createbutton' value='Create your list!' />
      </div>
      );
    };







export default Items;