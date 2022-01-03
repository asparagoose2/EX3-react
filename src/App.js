import logo from './logo.svg';
import './App.css';
import RoundButton from './components/RoundButton';
import Container from './components/Container';
import CardsList from './components/CardsList';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
    <div className="Wrapper">
      <Container>
        <CardsList/>
      </Container>
      <Container>
        <Form/>
      </Container>
    </div>
    </div>
      
  );
}

export default App;
