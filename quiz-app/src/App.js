
import './App.css';
import SignUp from './Components/SignUp';
import React, { useState } from "react";
import Quiz2 from './Components/Quiz_2';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Quiz from './Components/Quiz';
import Marks from './Components/Marks';

function App() {
  const [name,setName]=useState("");


  function handleChange(e){
    setName(e.target.value.toLowerCase());
  }
  /* const [data1,setData1]=useState("");
  function getData(data){
    setData1(data);
  } */
  return (
    <>

   

    <Routes>
      <Route exact path='/' element={<SignUp handleChange={handleChange} />} />
      <Route exact path='/quiz' element={<Quiz/>} />
      <Route exact path='/quiz2' element={<Quiz2 name1={name}/>} />
      <Route exact path='/marks' element={<Marks />} />
    </Routes>

    </>
  );
}

export default App;
