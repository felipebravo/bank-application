import emptyList from "../../assets/img/emptyList.svg";

const EmptyList = () => {
  return (
    <div>
      <h2>Você ainda não possui nenhum lançamento</h2>
      <img src={emptyList} alt="Itens vazios" />
      <img src={emptyList} alt="Itens vazios" />
      <img src={emptyList} alt="Itens vazios" />
    </div>
  );
};

export default EmptyList;
