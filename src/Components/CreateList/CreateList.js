import React from "react";


const CreateList = ({clickcreate}) => {
    return (
        <button type='submit' 
                onClick={clickcreate}
                className='createbutton' 
                value='Create your list!'>
                    Create your list!
        </button>
    )
}




export default CreateList;
