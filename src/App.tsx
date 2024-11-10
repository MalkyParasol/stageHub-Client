import { Routes, Route } from "react-router-dom"
import Home from "./components/Home/Home"
import SignUp from "./components/SignUp/SignUp"
import SignIn from "./components/SignIn/SignIn"
import NavBar from "./components/NavBar/NavBar"
import About from "./components/About/About"
import { SetStateAction, useState } from "react"
import React from "react"

function App() {
  
  const [userName, setUserName ] = React.useState<string | null>('');

  const handleUserName =(name: string) =>{
    setUserName(name);
  }

  return (
    <>
    <NavBar userName = {userName}/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/signin/:role" element={<SignIn onNameUpdate = {handleUserName}/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="about" element={<About/>}/>
     </Routes>
    </>
  )
}

export default App
