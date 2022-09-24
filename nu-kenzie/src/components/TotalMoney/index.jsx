import "./style.css";

export const DinheiroTotal = ({ listTransactions }) => {
  const total = listTransactions.reduce(
    (acc, valorAtual) => acc + Number(valorAtual.valor),
    0
  );

  return (
    <div className="div__total">
      <div className="total">
        <p className="p1">Valor Total:</p>{" "}
        <p className="p2">${listTransactions && total}</p>
      </div>
      <div>
        <p>Esse valor se refere ao saldo.</p>
      </div>
    </div>
  );
};
