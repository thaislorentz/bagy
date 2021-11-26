import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Default from "./pages/Default";
import Geral from "./pages/Geral";
import './App.scss';

function App() {
  return (
    <>
      <Router className="App" initialEntries={["/lojas", "/vendas", "/clientes", "/produtos", "/planos-metas", "/configuracoes", "/sair"]}>
        <Switch>
          <Route exact path="/" component={Geral} />
          <Route exact path="/lojas" component={Default} />
          <Route exact path="/vendas" component={Default} />
          <Route exact path="/clientes" component={Default} />
          <Route exact path="/produtos" component={Default} />
          <Route exact path="/planos-metas" component={Default} />
          <Route exact path="/configuracoes" component={Default} />
          <Route exact path="/sair" component={Default} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
