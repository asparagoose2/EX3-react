import logo from './logo.svg';
import './App.css';
import RoundButton from './components/RoundButton';
import Container from './components/Container';
import CardsList from './components/CardsList';

function App() {
  return (
    <div className="App">
      <Container>
        <CardsList/>
      </Container>
      <Container>
        <CardsList/>
      </Container>
    </div>
      
  );
}

export default App;
