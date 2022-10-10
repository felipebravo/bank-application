import "./style.css";

const TotalMoney = ({ listTransactions }) => {
  return (
    <div className="TotalMoney">
      <div>
        <h2>Valor total:</h2>
        <span>O valor se refere ao saldo</span>
      </div>
      <span>
        R$
        {listTransactions
          .reduce((valorAnterior, valorAtual) => {
            return valorAtual.type === "Entrada"
              ? valorAtual.value + valorAnterior
              : valorAnterior - valorAtual.value;
          }, 0)
          .toFixed(2)}
      </span>
    </div>
  );
};

export default TotalMoney;
