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
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();
  function submit(e) {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('As senhas não são iguais. Tente novamente.');
      return;
    }
    const promise = api.createUser({
      email,
      password,
    });
    promise.then(() => navigate('/signin'));
    promise.catch((error) => alert(error));
  }
  return (
    <Container>
      <header>
        <img src={Logo} alt="RepoProvas" />
        <img src={RepoProvas} alt="RepoProvas" />
      </header>
      <h1>Cadastro</h1>
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

        <FormControl sx={{ width: '50vw' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Confirme sua senha</InputLabel>
          <OutlinedInput
            type={showConfirmPassword ? 'text' : 'password'}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            label="Confirme sua senha"
            required
            endAdornment={(
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  edge="end"
                >
                  {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            )}
          />
        </FormControl>
        <FormFooter>
          <Link to="/signin">Já possuo cadastro</Link>
          <Button type="submit" variant="contained">CADASTRAR</Button>
        </FormFooter>
      </Form>
    </Container>
  );
}
