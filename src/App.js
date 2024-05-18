import { Card } from "./componentes/Card/Card";
import { EstilosGlobais } from "./componentes/EstilosGlobais/Estilos";
import { ProvedorTema } from "./componentes/ProvedorTema/ProvedorTema";
import { Tipografia } from "./componentes/Tipografia/Tipografia";
import { CampoTexto } from "./componentes/CampoTexto/CampoTexto";

function App() {
  return (
    <ProvedorTema>
      <EstilosGlobais />
      <Card>
        <Tipografia variante="h3" componente="h3">
          Freelando
        </Tipografia>
        <Tipografia variante="body" componente="body">
          Crie seu perfil gratuitamente para começar a trabalhar com os melhores freelancers. Em seguida, você poderá dar mais detalhes sobre suas demandas e sobre sua forma de trabalho.
        </Tipografia>
        <CampoTexto titulo="Nome Completo" />
      </Card>
    </ProvedorTema>
  );
}

export default App;
