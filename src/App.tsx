import { Routes, Route } from "react-router-dom"
import Home from "./components/Home/Home"
import SignUp from "./components/SignUp/SignUp"
import SignIn from "./components/SignIn/SignIn"
import NavBar from "./components/NavBar/NavBar"
import About from "./components/About/About"
import { useEffect, useState } from "react"


function App() {
  
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const savedUserName = localStorage.getItem('userName');
    if (savedUserName) {
      setUserName(savedUserName);  // Set the userName from localStorage on initial load
    }
  }, []);

  const handleLogin = (name) => {
    localStorage.setItem('userName', name);  
    setUserName(name);  
  };

  const handleLogout = () => {
    localStorage.removeItem('userName');
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    setUserName('');
  }

  return (
    <>
    <NavBar userName={userName} onLogout={handleLogout}/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/signin/:role" element={<SignIn onLogin={handleLogin} />}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="about" element={<About/>}/>
     </Routes>
    </>
  )
}

export default App
