import { Grid } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import EventCard from '../../components/show/cardShow';
import { Show } from '../../interfaces/show.interface';

const Home  = () => {
    const [shows, setShows] = useState<Show[]>([]); // מצב עבור המופעים
    const [hovered, setHovered] = useState(null); // מצב לניהול הכרטיס שהועבר מעליו
  
    useEffect(() => {
      const getAll = async () => {
        try {
          const res = await axios.get('http://localhost:3001/shows');
          console.log(res); // הדפסת ה-res
          setShows(res.data); // עדכון state עם המידע מה-API
        } catch (error) {
          console.error('Error fetching data:', error); // הדפסת שגיאה אם יש
        }
      };
  
      getAll();
    }, []);
  
    const handleBuyTicket = async (eventId) => {
      try {
        await axios.post('http://localhost:3001/buyTicket', { eventId });
        alert(`כרטיס עבור ${eventId} הוזמן בהצלחה!`); // הודעה על הצלחה
      } catch (error) {
        console.error('Error buying ticket:', error); // הדפסת שגיאה אם יש
        alert('אירעה שגיאה בהזמנת הכרטיס.'); // הודעת שגיאה
      }
    };
  
    return (
        <Grid container spacing={1} justifyContent="center" sx={{ padding: 2 }}>
        {shows.map((event:Show) => (
          <Grid item xs={12} sm={6} md={4} key={event.id}>
            <EventCard
              name={event.name}
              date={event.date}
              location={event.location}
              price={event.price}
              numAvailableTickets={event.numAvailableTickets}
              onMouseEnter={() => {}} // פונקציה ריקה, מכיוון שהכרטיס מטפל בהבהרה בעצמו
              onMouseLeave={() => {}}
              isHovered={false} // לא נשתמש ב-isHovered כאן
              onBuyTicket={() => handleBuyTicket(event.id)} // פונקציה להזמנת כרטיס
            />
          </Grid>
        ))}
      </Grid>
    );
  };

export default Home;
