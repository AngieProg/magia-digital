import PaginaPrincipal from "./sections/PaginaPrincipal";
import Sobre from "./sections/Sobre";
// import Contador from "./sections/Contador";
// import Ejemplos from "./sections/Ejemplos";
// import ElementosMagicos from "./sections/ElementosMagicos";

export default function App() {
  return (
    <main>
      <PaginaPrincipal /> 
      <Sobre />
      {/* <Contador />
      <Ejemplos />
      <ElementosMagicos /> */}
    </main>
  )
}