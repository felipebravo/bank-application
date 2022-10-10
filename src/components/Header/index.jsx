import "./style.css";

const Header = ({ setIsLoggedIn }) => {
  return (
    <header className="App-header">
      <span>Nu Kenzie</span>
      <button onClick={() => setIsLoggedIn(false)}>Encerrar</button>
    </header>
  );
};

export default Header;
