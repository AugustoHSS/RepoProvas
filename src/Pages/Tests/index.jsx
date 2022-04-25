import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import Logo from '../../Images/imgLogo.svg';
import RepoProvas from '../../Images/RepoProvas.svg';
import Logout from '../../Images/Logout.svg';
import {
  Container, DisciplineButton, ProfessorButton, AddButton, ButtonsContainer, Accordion, Panel,
} from './styles';

export default function testsPage() {
  const [search, setSearch] = useState('');
  const [selectedButton, setSelectedButton] = useState(0);
  const [data, setData] = useState([]);
  return (
    <Container>
      <header>
        <div>
          <img src={Logo} alt="RepoProvas" />
          <img src={RepoProvas} alt="RepoProvas" />
        </div>
        <img src={Logout} alt="Logout" />
      </header>
      <TextField
        sx={{ width: '30vw' }}
        label="Pesquise por disciplina"
        variant="outlined"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Divider sx={{ width: '100vw', marginBottom: '40px', marginTop: '40px' }} />
      <ButtonsContainer>

        <DisciplineButton
          selectedButton={selectedButton}
          variant="contained"
          onClick={() => setSelectedButton(0)}
        >
          DICIPLINAS
        </DisciplineButton>

        <ProfessorButton
          selectedButton={selectedButton}
          variant="contained"
          onClick={() => setSelectedButton(1)}
        >
          PESSOA INSTRUTORA
        </ProfessorButton>

        <AddButton
          selectedButton={selectedButton}
          variant="contained"
          onClick={() => setSelectedButton(2)}
        >
          ADICIONAR
        </AddButton>

      </ButtonsContainer>

      <Accordion onClick={(e) => console.log(e.target.nextElementSibling.style.display)}>
        Section 1
      </Accordion>
      <Panel>
        <p>Lorem ipsum...</p>
      </Panel>
    </Container>
  );
}
