import Card from "../Card";
import "./style.css";

const List = ({ filter, setFilter, setListTransactions }) => {
  const discard = (id) => {
    console.log(id);
    setFilter(
      filter.filter((transaction) => console.log(transaction.id) !== id)
    );
    console.log(filter);
    setListTransactions(filter.filter((transaction) => transaction.id !== id));
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
