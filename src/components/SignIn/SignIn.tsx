import { useParams } from 'react-router-dom';
import { Role } from '../../enums/role.enum';
import React, { useState } from 'react';
import { Container, TextField, Button, Box, Typography } from '@mui/material';
import { styled } from '@mui/system';
import axios from 'axios';

const FormContainer = styled(Container)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  });
  
  const FormBox = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    maxWidth: '400px',
  });
const SignIn: React.FC  = ({onNameUpdate}) => {
    
    const { role } = useParams();

   
    const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    // Handle login logic here
    try {
        const res = await axios.post(`http://localhost:3001/login/${Role[role]}`, { email, password });
        console.log(res.data);
        localStorage.setItem("token",res.data.token);
        localStorage.setItem("id",res.data.id);

        const details = await axios.get(`http://localhost:3001/details/${res.data.id}/` , {
            headers: {
              'auth-token': res.data.token 
            }
          });
        onNameUpdate(details.data.name);
      } catch (error) {
        console.error('Error login:', error); // הדפסת שגיאה אם יש
        alert('אירעה שגיאה בהתחברות .'); // הודעת שגיאה
      }
  };

  return (

    
    <FormContainer>

<h1>{role ? Role[role as keyof typeof Role] : "Unknown Role"}</h1>

        {/* <h1>Hello {Role[role]}!🤗</h1> */}
      {/* <Typography variant="h4" gutterBottom>
      </Typography> */}
      <FormBox component="form" onSubmit={handleLogin}>
        <TextField
          label="מייל"
          variant="outlined"
          margin="normal"
          fullWidth
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type='email'
        />
        <TextField
          label="סיסמה"
          type="password"
          variant="outlined"
          margin="normal"
          fullWidth
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}

        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          התחבר
        </Button>
        
      </FormBox>
    </FormContainer>
  );

};

export default SignIn;