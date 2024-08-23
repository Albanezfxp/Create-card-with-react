import Button from "./components/button/Button";
import Paragraphy from "./components/conteudo/Conteudo";
import Img from "./components/image/image";
import Title from "./components/title/Title";

function App() {
  return (
    <div id="container">
      <Img />
      <div id="conteudo">
        <Title />
        <Paragraphy />
        <Button />
      </div>
    </div>
  );
}

export default App;
