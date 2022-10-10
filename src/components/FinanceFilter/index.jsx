import "./style.css";

const FinanceFilter = ({ listTransactions, setFilter }) => {
  return (
    <div className="FinanceFilter">
      <span>Resumo Financeiro</span>
      <ul>
        <li>
          <button
            onClick={() => {
              setFilter(listTransactions);
            }}
          >
            Todos
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              setFilter(
                listTransactions.filter((transaction) => {
                  return transaction.type === "Entrada";
                })
              );
            }}
          >
            Entradas
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              setFilter(
                listTransactions.filter((transaction) => {
                  return transaction.type === "Saída";
                })
              );
            }}
          >
            Despesas
          </button>
        </li>
      </ul>
    </div>
  );
};

export default FinanceFilter;
