import { Player } from "@lottiefiles/react-lottie-player";
import "./style.css";

const HomePage = ({ setIsLoggedIn }) => {
  return (
    <div className="HomePage">
      <div className="HomePage-description">
        <h1>The Bank</h1>
        <p>Centralize o controle das suas finanças de forma rápida e segura</p>
        <button onClick={() => setIsLoggedIn(true)}>Iniciar</button>
      </div>
      <div className="HomePage-img">
        <Player
          autoplay={true}
          loop={true}
          controls={false}
          src="https://assets3.lottiefiles.com/packages/lf20_stularjd.json"
          style={{ height: "400px", width: "90%" }}
        ></Player>
      </div>
    </div>
  );
};

export default HomePage;
