import React from "react";


const List = ({array}) => { 

    const itemsList = array.map(i => <label className="listings" htmlFor={i} key = {i}>
                        <input type="checkbox"  name={array[i]}/>{i} 
                        <div className="action">Started</div> 
                        <input type="radio" name='progress'/>   
                        <div className="action">Done</div>
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

