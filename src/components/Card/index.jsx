import { FaTrash } from "react-icons/fa";
import "./style.css";

const Card = ({ transaction, index, discard }) => {
  return (
    <li className="Transaction-item" key={index}>
      <div>
        <span>{transaction.description}</span>
        <span>{transaction.type}</span>
      </div>
      <span>R$ {transaction.value.toFixed(2)}</span>
      <button onClick={() => discard(transaction.id)}>
        <FaTrash />
      </button>
    </li>
  );
};

// Just trying

export default Card;
