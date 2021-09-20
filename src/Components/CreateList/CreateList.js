import React from "react";


const CreateList = ({createList}) => {
    return (
        <button type='submit' 
                onClick={createList}
                className='createbutton' 
                value='Create your list!'>
                    Create your list!
        </button>
    )
}




export default CreateList;
