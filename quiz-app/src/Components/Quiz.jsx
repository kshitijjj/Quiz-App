import React, { useEffect, useState } from 'react';
import Spinner from './Spinner';
import Marks from './Marks';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";

function Quiz(props){

    


    const [points,setPoints]=useState(0);
    const [ans1,setans1]=useState(true);
    const [question1,setQuestion1]=useState("");
    const[index,setindex]=useState(0);
    const [options0,setOptions0]=useState();
    const [options1,setOptions1]=useState();
    const [options2,setOptions2]=useState();
    const [options3,setOptions3]=useState();
    const [value,setValue]=useState('');
    const [correctans,setcorrectans]=useState(0);
    const [wrongans,setwrongans]=useState(0);
    const [notans,setnotans]=useState(0);
    const [submit,setSubmit]=useState(false)
    const [ans2,setans2]=useState(false);    

    useEffect(()=>{
        setTimeout(()=>{
            setans1(false)
        },1800);
    })

    let API="https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple"
    let ans='';

    

    async function fetchApiData(url){
        try{
        const res=await fetch(url);
        const data=await res.json();
        showQuestion(data.results[index]);
        }
        catch(error){
            console.log(error);
        }
    }

    function handleClick1(){
        ans=options0
        setans2(true);
    }
    function handleClick2(){
        ans=options1
        setans2(true);
    }
    function handleClick3(){
        ans=options2
        setans2(true);
    }
    function handleClick4(){
        ans=options3
        setans2(true);
    }
    
    function showQuestion(data1){
        let correctanswer=data1.correct_answer;
        setValue(correctanswer);
        let incorrectanswer=data1.incorrect_answers;
        let answer_array=incorrectanswer;
        answer_array.splice(Math.floor(Math.random() * (incorrectanswer.length+1)),0,correctanswer);
        setQuestion1(data1.question)
        setOptions0(answer_array[0]);
        setOptions1(answer_array[1]);
        setOptions2(answer_array[2]);
        setOptions3(answer_array[3]);
    }

    console.log(value);
    function handleClick(){
        if(ans===value ){
            setPoints(points+1)
            setcorrectans(correctans+1);
            if(index<=9){
                setindex(index+1);
                fetchApiData(API)
            }
            
        }else if(ans!==value && ans2===true){
            setwrongans(wrongans+1)
            if(index<=9){
                setindex(index+1);
                fetchApiData(API)
            }
        }
        else if(ans!==value && ans2===false){
            setnotans(notans+1);
            if(index<=9){
                setindex(index+1);
                fetchApiData(API)
            }
        }
    }
    



    useEffect(()=>{
        fetchApiData(API);
    },[])

    function handleSubmit(){
        setSubmit(true);
        console.log(submit)
    }


    return (
        <>
        
        {submit?<Marks points1={points} correct={correctans} incorrect={wrongans} notanswered={notans}/>
        
        :
        
        <div className="main2">
            {ans1?<Spinner text=" PREPARING THE QUIZ........"/>
            :
            <div className="main2_1">
                <p id="main2_text1">QUIZ</p>

                <p id="main2_points">Points- {points}/10</p>
                <div className="question">
                    <p id="main2_text2">{index+1}</p>
                    <p id="main2_text3">{question1}</p>
                </div>

                <ul className="main2_options">
                    <li onClick={handleClick1}    className="option1">{options0}</li>
                    <li  onClick={handleClick2}   className="option2">{options1}</li>
                    <li  onClick={handleClick3}     className="option3">{options2}</li>
                    <li onClick={handleClick4}    className="option4">{options3}</li>
                </ul>

                {index<9?
                <div className="buttons">
                <Link  to='/' id="main2_btn"><span><img id='img1' src="" alt="" /></span>Quit </Link>
                <button  onClick={handleClick}   id="main2_submit">Next<span><img id='img2' src="" alt="" /></span></button>
                </div>
                :
                <button onClick={handleSubmit}  id="main2_btn1">Submit<span><img id='img2' src="" alt="" /></span></button>
                }

            </div>
}
        </div>
        }


        </>
    );
}

export default Quiz;
