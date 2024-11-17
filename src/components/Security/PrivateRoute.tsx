import { Navigate, Outlet, useLocation } from 'react-router-dom';

const PrivateRoute = () => {

  const location = useLocation();
  const role = location.pathname.split('/')[1]; // מוציא את החלק הראשון אחרי ה"/"
  if (!localStorage.getItem('userName') || localStorage.getItem('userRole') != role) {
    
      return <Navigate to={`/signin/${role}`} state={{ from: location }} />;
    // Redirect to SignIn with the current location (to redirect back after login)
    //return <Navigate to={`/signin/`} state={{ from: location }} />;
  }

  return <Outlet />;
};

export default PrivateRoute