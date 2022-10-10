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
            {listTransactions.length === 0 ? (
              <div>
                <div className="Form-div">
                  <Form
                    listTransactions={listTransactions}
                    setListTransactions={setListTransactions}
                    setFilter={setFilter}
                  />
                </div>
                <div className="Finance-div">
                  <FinanceFilter
                    listTransactions={listTransactions}
                    filter={filter}
                    setFilter={setFilter}
                  />
                  <EmptyList />
                </div>
              </div>
            ) : (
              <div>
                <div className="Form-div">
                  <Form
                    listTransactions={listTransactions}
                    setListTransactions={setListTransactions}
                    setFilter={setFilter}
                  />
                  <TotalMoney listTransactions={listTransactions} />
                </div>
                <div className="Finance-div">
                  <FinanceFilter
                    listTransactions={listTransactions}
                    filter={filter}
                    setFilter={setFilter}
                  />
                  <List
                    filter={filter}
                    setListTransactions={setListTransactions}
                    setFilter={setFilter}
                  />
                </div>
              </div>
            )}
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
