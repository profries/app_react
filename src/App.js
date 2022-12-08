import './App.css';
import Hello from "./componentes/Hello";
import HiMessage from './componentes/HiMessage';
import MeuCard from './componentes/MeuCard';
import ListaCards from './componentes/ListaCards';
import ListaCardsApi from './componentes/ListaCardsApi';
import BotaoIncClass from './componentes/BotaoIncClasse'
import BotaoIncFuncao from './componentes/BotaoIncFuncao';
function App() {
  return (
    <div>
      <HiMessage />
      <Hello />
      <BotaoIncClass />
      <br />
      <BotaoIncFuncao />

      <ListaCardsApi />
      
      {/* <MeuCard titulo="Card 1">
        <h4>Texto 1 do Card 1</h4>
        <h4>Texto 2 do Card 1</h4>
      </MeuCard>
      <MeuCard titulo="Card 2">
        <h4>Outro texto do Card 2</h4>
      </MeuCard>
      <ListaCards /> */}
    </div>
  );
}

export default App;
