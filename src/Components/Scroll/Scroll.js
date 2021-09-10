import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{overflowY: 'scroll', border: '3px solid blue', borderRadius: '7px', height:'55vh'}}>
            {props.children}
        </div>

    )

};

export default Scroll;