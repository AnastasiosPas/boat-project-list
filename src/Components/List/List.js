import React from "react";



const List = ({array}) => { 

    const itemsList = array.map(i => <label className="listings item" htmlFor={i} key={i}>
                        <input type="checkbox" className='checkboxItems' id={array[i]}  name={array[i]} />{i} 
                        <div className="action">Started</div> 
                        <input type="radio" name='progress'/>   
                        <div className="action" >Done</div>
                        <input type="radio" name='progress' />
                        </label>); 
 


    return (
                <div className='list'>
                    <div> 
                        {itemsList}
                    </div>

                </div>
            )
}

    

export default List;

