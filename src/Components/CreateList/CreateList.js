import React from "react";


const CreateList = ({onCreate}) => {
    return (
        <button type='submit' 
                onClick={onCreate}
                className='createbutton' 
                value='Create your list!'>
                    Create your list!
        </button>
    )
}




export default CreateList;
