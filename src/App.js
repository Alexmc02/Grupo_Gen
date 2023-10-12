import './App.css';
import Header from './Componentes/header';
import Requisitos from './Componentes/Requisitos';
import Img from './Componentes/Img';
import Informacion_Area from './Componentes/Parte4';
import YouTubeVideo from './Componentes/Parte5';

function App() {
  return (
    <div className="App">
      <div className=""><Header/></div>
      <body>
      <div className=""><Img/></div>  
      <h1 className="display-3 container mt-4">Informacion del Area de psicologia </h1>
      <div className="container mt-4" ><Requisitos/></div>
      <div className="container mt-4"><Informacion_Area/></div>
      <div className="container mt-4"><YouTubeVideo/></div>
      </body>

    </div>
  );
}

export default App;
