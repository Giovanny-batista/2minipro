import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import AvaliacaoProfessor from './Componentes/AvaliacaoProfessor';



const AppContainer = styled.div`
  font-family: Arial, sans-serif;
`;

const Header = styled.header`
  background-color: #0076b6;
  color: white;
  padding: 20px;
`;

const Menu = styled.nav`
  background-color: #0076b6;
  color: white;
  padding: 10px;
`;

const MenuItem = styled(Link)`
  color: white;
  text-decoration: none;
  margin: 10px;
  font-weight: bold;
`;

function App() {
  return (
    <Router>
      <AppContainer>
        <Header>
          <h1>Avaliação de Professores - IFPI</h1>
        </Header>
        <Menu>
          <MenuItem to="/">Avaliar Professor</MenuItem>
        </Menu>
        <Route path="/" exact component={AvaliacaoProfessor} />
      </AppContainer>
    </Router>
  );
}

export default App;
