import { Card } from "./componentes/Card/Card";
import { EstilosGlobais } from "./componentes/EstilosGlobais/Estilos";
import { ProvedorTema } from "./componentes/ProvedorTema/ProvedorTema";

function App() {
  return (
    <ProvedorTema>
      <EstilosGlobais />
      <Card>
        <h1>Freelando</h1>
      </Card>
    </ProvedorTema>
  );
}

export default App;
