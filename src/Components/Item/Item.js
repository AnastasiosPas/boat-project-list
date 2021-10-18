import React from "react";



const Item = ({item}) => { 


    return (
                <div className='list'>
                    <label className="listings item" htmlFor={item} key={item}>
                    <input type="radio"  id={item}/>
                        {/* <input type="checkbox" className='checkboxItems' id={item}  name={item} />{item}  */}
                        {item} 
                        <div className="action">Started</div> 
                        <input type="radio" name={item}/>   
                        <div className="action" >Done</div>
                        <input type="radio" name={item}/>
                        </label>
                </div>
            )
}

    

export default Item;

