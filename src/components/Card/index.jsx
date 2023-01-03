import { FaTrash } from "react-icons/fa";
import "./style.css";

const Card = ({ transaction, index, discard }) => {
  return transaction.type === "Entrada" ? (
    <li className="Transaction-item" id="Profit" key={index}>
      <div>
        <span>
          {transaction.description[0].toUpperCase() +
            transaction.description.substring(1)}
        </span>
        <span>{transaction.type}</span>
      </div>
      <span>R$ {transaction.value.toFixed(2)}</span>
      <button onClick={() => discard(transaction.id)}>
        <FaTrash />
      </button>
    </li>
  ) : (
    <li className="Transaction-item" id="Expense" key={index}>
      <div>
        <span>
          {transaction.description[0].toUpperCase() +
            transaction.description.substring(1)}
        </span>
        <span>{transaction.type}</span>
      </div>
      <span>R$ {transaction.value.toFixed(2)}</span>
      <button onClick={() => discard(transaction.id)}>
        <FaTrash />
      </button>
    </li>
  );
};

export default Card;
