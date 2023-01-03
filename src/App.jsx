import "./App.css";
import { useState } from "react";
import Main from "./components/Main";
import Header from "./components/Header";
import Form from "./components/Form";
import TotalMoney from "./components/TotalMoney";
import List from "./components/List";
import HomePage from "./components/HomePage";
import FinanceFilter from "./components/FinanceFilter";
import EmptyList from "./components/EmptyList";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [listTransactions, setListTransactions] = useState([]);
  const [filter, setFilter] = useState([]);

  return (
    <div className="App">
      {isLoggedIn ? (
        <div>
          <Header setIsLoggedIn={setIsLoggedIn} />
          <Main>
            <div>
              <div className="Form-div">
                <Form
                  listTransactions={listTransactions}
                  setListTransactions={setListTransactions}
                  setFilter={setFilter}
                />
                {listTransactions.length > 0 && <TotalMoney filter={filter} />}
              </div>
              <div className="Finance-div">
                <FinanceFilter
                  listTransactions={listTransactions}
                  filter={filter}
                  setFilter={setFilter}
                />
                {listTransactions.length === 0 ? (
                  <EmptyList />
                ) : (
                  <List
                    filter={filter}
                    setFilter={setFilter}
                    listTransactions={listTransactions}
                    setListTransactions={setListTransactions}
                  />
                )}
              </div>
            </div>
          </Main>
        </div>
      ) : (
        <Main>
          <HomePage setIsLoggedIn={setIsLoggedIn} />
        </Main>
      )}
    </div>
  );
};

export default App;
