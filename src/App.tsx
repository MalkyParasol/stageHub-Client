import { Routes, Route, useNavigate } from "react-router-dom"
import Home from "./components/Home/Home"
import SignUp from "./components/SignUp/SignUp"
import SignIn from "./components/SignIn/SignIn"
import NavBar from "./components/NavBar/NavBar"
import About from "./components/About/About"
import { useEffect, useState } from "react"
import PrivateRoute from "./components/Security/PrivateRoute"
import UserDashboard from "./components/Dashboard/userDashboard"


function App() {

  const details = localStorage.getItem('userDetails') ? JSON.parse(localStorage.getItem('userDetails')!) : null;

  const userRole = localStorage.getItem('userRole');
  
  // const details = localStorage.getItem('userDetails') ? JSON.parse(localStorage.getItem('userDetails')!) : null;
  
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

  const handleLogin = (name:string,role:string) => {
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
    localStorage.removeItem('userDetails');
    setUserName('');
    navigate('/');
  }

  return (
    <>
    <NavBar userName={userName} onLogout={handleLogout} pages={pages} />
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin/:role" element={<SignIn onLogin={handleLogin} />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/about" element={<About />} />
        

        <Route element={<PrivateRoute  />}>
          <Route path={`/${localStorage.getItem('userRole')}`} element={<UserDashboard  details={details}/>} /> 
        </Route>


        <Route path="*" element={<Home />} />

      </Routes>
    </>
  )
}

export default App
