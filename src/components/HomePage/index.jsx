import illustration from "../../assets/img/illustration.svg";
import "./style.css";

const HomePage = ({ setIsLoggedIn }) => {
  return (
    <div className="HomePage">
      <div className="HomePage-description">
        <h1>Nu Kenzie</h1>
        <p>Centralize o controle das suas finanças</p>
        <span>de forma rápida e segura</span>
        <button onClick={() => setIsLoggedIn(true)}>Iniciar</button>
      </div>
      <div className="HomePage-img">
        <img src={illustration} alt="Imagem ilustrativa" />
      </div>
    </div>
  );
};

export default HomePage;
