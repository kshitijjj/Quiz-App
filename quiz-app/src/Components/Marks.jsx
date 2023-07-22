import React, { useEffect, useState } from 'react';
import Spinner from './Spinner';

function Marks(props){
    const [loading,setLoading]= useState(true);

    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false)
        },1800)
    })
    return (
        

       <>
       {loading?<Spinner text="CALCULATING THE RESULTS...... "/>
        :   
    
        <div className="main4">
            
            <div className="main4_1">
                <p id="main4_text2">MARKS SCORED:&nbsp;{props.points1}/10</p>
            </div>

            <div className="main4_2">
                <p id="main4_text3">Correct Answers:&nbsp;<span id='main4_text4'>{props.correct}</span></p>
                <p id="main4_text5">Incorrect Answers:<span id='main4_text6'>{props.incorrect}</span></p>
                <p id="main4_text7">Not Answered:<span id='main4_text8'>{props.notanswered}</span></p>
            </div>

            <div className="buttons1">
                <a href="/" id="main4_link1">HOME</a>
                <a href="/quiz" id="main4_link2">TRY AGAIN</a>
            </div>
        </div>
}
</>
        );
}

export default Marks;
