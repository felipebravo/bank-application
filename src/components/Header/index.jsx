import "./style.css";

const Header = ({ setIsLoggedIn }) => {
  return (
    <header className="App-header">
      <h1>The Bank</h1>
      <button onClick={() => setIsLoggedIn(false)}>Sair</button>
    </header>
  );
};

export default Header;
