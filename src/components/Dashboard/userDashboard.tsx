
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { Director } from '../../types/director';
import { Manager } from '../../types/manager';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import { useNavigate } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

//const navigate = useNavigate();


const translations = {
  coaches: "מאמנים",
  actors: "שחקנים",
  providers: "ספקים",
  directors:"במאים",
};

// const navigate = useNavigate();

function UserDashboard({user}) {
  const navigate = useNavigate();

  const navigateToDiary = () => {
    navigate(`diary`);
  }
  const navigateToUserList = (usreRole) => {
    navigate(`user-list/${usreRole}`);
  }
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '80vh',
        backgroundColor: '#f5f5f5', // רקע בהיר לדוגמה
      }}
    >
      <Card
        sx={{
          width: '65%',
          height: '80%',
          padding: 2,
          boxShadow: 3,
          borderRadius: 2,
          display: 'flex',
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <CardContent>
          <Typography variant="h5" component="div">
            {user ? user.name : 'No user available'}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {user ? user.email : 'No email available'}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {user ? user.phone : 'No phone available'}
          </Typography>
          {/* {user.list.map((item, index) => (
            <Typography key={index} variant="body2" color="text.secondary">
              {item}
            </Typography>
          ))} */}
        </CardContent>
        <CardContent style={{width:"22%"}}>
          <Typography variant="h5" component="div" onClick={navigateToDiary} style={{cursor:"pointer"}}>

           <div style={{textDecoration:"underLine", marginBottom:"10%"}}>
           <CalendarMonthIcon style={{ verticalAlign: "middle" ,marginLeft:"5%"}}/>
           {"יומן חזרות"}
           </div>

          </Typography>
          {user.list.map((item, index) => (
            <Typography key={index} variant="h5" style={{cursor:"pointer"}} onClick={() => navigateToUserList(item)}>
              <div style={{textDecoration:"underLine", marginBottom: "10%"}}>
              <FormatListBulletedIcon style={{ verticalAlign: "middle", marginLeft:"5%"}}/>
              {`רשימת ה${translations[item] || item}`}              </div>             
            </Typography>
          ))}
        </CardContent>
      </Card>
    </Box>
  );
}

export default UserDashboard;