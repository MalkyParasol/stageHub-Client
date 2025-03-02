import { Routes, Route, useNavigate } from "react-router-dom"
import Home from "./components/Home/Home"
import SignUp from "./components/SignUp/SignUp"
import SignIn from "./components/SignIn/SignIn"
import NavBar from "./components/NavBar/NavBar"
import About from "./components/About/About"
import { useEffect, useState } from "react"
import ManagerDashboard from "./components/Dashboard/ManagerDashboard"
import DirectorDashboard from "./components/Dashboard/DirectorDashboard"
import ProviderDashboard from "./components/Dashboard/ProviderDashboard"
import CoachDashboard from "./components/Dashboard/CoachDashboard"
import ActorDashboard from "./components/Dashboard/ActorDashboard"
import PrivateRoute from "./components/Security/PrivateRoute"
import Dairy from "./components/Dairy/Dairy"


function App() {

  const userRole = localStorage.getItem('userRole');
  
  
  
  const pages = 
  [{name:'בית', path:'/'},
   {name: 'אודות', path:"/about"},
  ];
  

  const navigate = useNavigate()
  
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const savedUserName = localStorage.getItem('userName');
    if (savedUserName) {
      setUserName(savedUserName);  // Set the userName from localStorage on initial load
    }
  }, []);

  const handleLogin = (name,role) => {
    localStorage.setItem('userName', name);  
    localStorage.setItem('userRole',role);
    setUserName(name);  
    navigate(`/${userRole}/dairy`);
  };


  const handleLogout = () => {
    localStorage.removeItem('userName');
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    localStorage.removeItem('userRole');
    setUserName('');
    navigate('/');
  }

  return (
    <>
    <NavBar userName={userName} onLogout={handleLogout} pages={pages} />
     {/* <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/signin/:role" element={<SignIn onLogin={handleLogin} />}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/manager" element ={<ManagerDashboard/>}/>
      <Route path="/director" element ={<DirectorDashboard/>}/>
      <Route path="/provider" element ={<ProviderDashboard/>}/>
      <Route path="/coach" element ={<CoachDashboard/>}/>
      <Route path="/actor" element ={<ActorDashboard/>}/>
     </Routes> */}
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin/:role" element={<SignIn onLogin={handleLogin} />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/about" element={<About />} />
        

        <Route element={<PrivateRoute  />}>
          <Route path="/manager" element={<ManagerDashboard />} /> 
          <Route path="/director" element={<DirectorDashboard />} />
          <Route path="/director/dairy" element={<Dairy />} />
          <Route path="/provider" element={<ProviderDashboard />} />
          <Route path="/coach" element={<CoachDashboard />} />
          <Route path="/coach/dairy" element={<Dairy />} />
          <Route path="/actor" element={<ActorDashboard />} />
          <Route path="/actor/dairy" element={<Dairy />} />
        </Route>


        <Route path="*" element={<Home />} />

      </Routes>
    </>
  )
}

export default App
