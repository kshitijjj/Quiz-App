import React, { useEffect, useState } from 'react';
import { Link, useActionData } from 'react-router-dom';
import Spinner from './Spinner';

function Quiz2 (props) {
    const [ans,setans]=useState(true);

    useEffect(()=>{
        setTimeout(()=>{
            setans(false)
        },500);
    })
    return (
        


        <>
        {ans?
        <Spinner text="Getting the instructions for the quiz........" />
        :
        <div className="main3">
        
        <div className="main3_1">

        <div className="main3_heading1">
            <p id="main3_text1">Hey,&nbsp;<span id='main3_text'>{props.name1}</span> </p>
            <p id="main3_text2">Welcome to our quiz app</p>
        </div>

        <div className="main3_heading2">
            <p id="main3_text3">Please read the instructions for the quiz</p>

            <div className="main3_heading3">
                <ul>
                    <li id="li">Quiz consists of 10 questions</li>
                    <li id="li">Quiz consists of multiple choice questions</li>
                    <li id="li">You will get 20 points for every correct answer</li>
                    <li id="li">0 points will be given for the wrong answer</li>
                </ul>
                <p id="main3_text5">ALL THE BEST</p>
            </div>

            <Link to="/quiz" id="main3_link">START QUIZ</Link>
        </div>

        </div>
    </div>
}
      </>
    );
}

export default Quiz2;
