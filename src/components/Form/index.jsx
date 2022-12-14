import { useState } from "react";
import "./style.css";
import { v4 as uuidv4 } from "uuid";

const Form = ({ listTransactions, setListTransactions, setFilter }) => {
  const [formData, setFormData] = useState({
    description: "",
    type: "Entrada",
    value: "",
  });
  const newTransaction = (evt) => {
    evt.preventDefault();

    const newFormData = {
      id: uuidv4(),
      ...formData,
    };
    if (!formData.description || !formData.value) {
      setListTransactions(listTransactions);
    } else {
      setListTransactions((previousValue) => [...previousValue, newFormData]);
      setFilter((previousValue) => [...previousValue, newFormData]);
    }

    setFormData({
      description: "",
      value: "",
      type: "Entrada",
    });
  };

  return (
    <form className="App-form" onSubmit={(evt) => newTransaction(evt)}>
      <label htmlFor="">Descrição</label>
      <input
        className="placeholder-text"
        type="text"
        placeholder="Digite o título da transação..."
        value={formData.description}
        onChange={(evt) =>
          setFormData({ ...formData, description: evt.target.value })
        }
      />
      <div>
        <div>
          <label htmlFor="">Valor</label>
          <input
            className="placeholder-text"
            type="number"
            placeholder="R$"
            value={formData.value}
            onChange={(evt) =>
              setFormData({ ...formData, value: Number(evt.target.value) })
            }
          />
        </div>
        <div>
          <label htmlFor="">Tipo de valor</label>
          <select
            value={formData.type}
            onChange={(evt) =>
              setFormData({ ...formData, type: evt.target.value })
            }
          >
            <option value="Entrada">Entrada</option>
            <option value="Saída">Saída</option>
          </select>
        </div>
      </div>
      <button type="submit">Inserir valor</button>
    </form>
  );
};

export default Form;
