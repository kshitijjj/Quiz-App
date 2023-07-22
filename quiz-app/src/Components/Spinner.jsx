import React from 'react';

function Spinner (props) {
    return (
        <>
        
        <div className="spinner">
        <p id="spinner_text">{props.text}</p>
        <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
        </div>
        </>
    );
}

export default Spinner;
