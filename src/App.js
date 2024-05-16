import { Card } from "./componentes/Card/Card";
import { EstilosGlobais } from "./componentes/EstilosGlobais/Estilos";

function App() {
  return (
    <div>
      <EstilosGlobais />
      <Card>
        <h1>Freelando</h1>
      </Card>
    </div>
  );
}

export default App;
