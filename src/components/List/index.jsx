import Card from "../Card";
import "./style.css";

const List = ({ filter, setFilter, listTransactions, setListTransactions }) => {
  const discard = (id) => {
    setFilter(filter.filter((transaction) => transaction.id !== id));
    setListTransactions(
      listTransactions.filter((transaction) => transaction.id !== id)
    );
  };

  return (
    <ul className="List-transactions">
      {filter.map((transaction, index) => (
        <Card transaction={transaction} key={index} discard={discard} />
      ))}
    </ul>
  );
};

export default List;
