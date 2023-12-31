import React, { useEffect, useState } from 'react';
import { Link, useActionData } from 'react-router-dom';
import Spinner from './Spinner';

function SignUp(props){
    const [loading,setLoading]=useState(true);

    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false)
        },500);
    })

    return (
<>  
        {loading?
        <Spinner text="WELCOME TO THE QUIZ APP"/>
        :
        
        <div className="main_1">

            <div className="main1_image">
                <img src="./images/img_1.svg" alt="" id="main1_img" />
            </div>

            <div className="main1_text">

                <div className="main1_heading1">
                    <p id="main1_text1">WELCOME TO QUIZ</p>
                    <p id="main1_text2">Please enter your name</p>
                </div>

                <div className="main1_heading2">
                    <input  type="text" placeholder='Your name' onChange={props.handleChange} id="main1_input" ></input>
                    <select onChange={props.handleChange2} id="main1_input2" >
                        <option selected >Select Difficulty</option>
                        <option id="main1_input3" value="easy">Easy</option>
                        <option id="main1_input3" value="medium">Medium</option>
                        <option id="main1_input3" value="hard">Hard</option>
                    </select>
                    <Link id='main1_link' to='/quiz2'>Submit</Link>
                </div>
            </div>
        </div>
}
  </>
    );
}

export default SignUp;

