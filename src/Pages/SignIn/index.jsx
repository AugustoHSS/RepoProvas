import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Link, useNavigate } from 'react-router-dom';
import Divider from '@mui/material/Divider';
import {
  Container, Form, FormFooter, DividerContainer, GitHubLoginButton,
} from './styles';
import Logo from '../../Images/imgLogo.svg';
import RepoProvas from '../../Images/RepoProvas.svg';
import api from '../../services/api';

export default function signUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  function submit(e) {
    e.preventDefault();
    const promise = api.login({
      email,
      password,
    });
    promise.then(() => navigate('/'));
    promise.catch((error) => { alert(error.message); });
  }
  return (
    <Container>
      <header>
        <img src={Logo} alt="RepoProvas" />
        <img src={RepoProvas} alt="RepoProvas" />
      </header>
      <h1>Login</h1>
      <GitHubLoginButton variant="contained">
        ENTRAR COM O GITHUB
      </GitHubLoginButton>
      <DividerContainer>
        <Divider>OU</Divider>
      </DividerContainer>
      <Form onSubmit={(e) => submit(e)}>
        <TextField
          sx={{ width: '50vw' }}
          label="Email"
          variant="outlined"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <FormControl sx={{ width: '50vw' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Senha</InputLabel>
          <OutlinedInput
            label="Senha"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            endAdornment={(
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => setShowPassword(!showPassword)}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            )}
          />
        </FormControl>
        <FormFooter>
          <Link to="/signup">Não possuo cadastro</Link>
          <Button type="submit" variant="contained">ENTRAR</Button>
        </FormFooter>
      </Form>
    </Container>
  );
}
