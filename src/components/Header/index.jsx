import "./style.css";

const Header = ({ setIsLoggedIn }) => {
  return (
    <header className="App-header">
      <span>Your Bank</span>
      <button onClick={() => setIsLoggedIn(false)}>Sair</button>
    </header>
  );
};

export default Header;
