import Container from './components/Containe';
import './App.css';
import Cabecalho from './components/Cabecalho';
import Titulo from './components/Titulo';
import Rodape from './components/Rodape';

function App() {
  return (
    <>
    <Cabecalho />
    <Container >
      <Titulo>Área Administrativa</Titulo>
    </Container>
    <Rodape />
    </>
  );
}

export default App;
