import { Container } from "./style";

import incomeSvg from "../../assets/entradas.svg";
import outcomeSvg from "../../assets/saidas.svg";
import totalSvg from "../../assets/total.svg";
import { useCollection } from "../../hooks/useCollection";

export function Summary() {
  const { documents } = useCollection("transactions");
  const incomeArr: number[] = [];
  const outcomeArr: number[] = [];

  documents.map((q) =>
    q.type === "withdraw" ? outcomeArr.push(-q.valor) : incomeArr.push(q.valor)
  );

  const totalValues = incomeArr.concat(outcomeArr).reduce((a, b) => a + b, 0);

  const totalIncome = incomeArr.reduce((a, b) => a + b, 0);
  const totalOutcome = outcomeArr.reduce((a, b) => a + b, 0);

  return (
    <Container>
      <div>
        <header>
          <h3>Entradas</h3>
          <img src={incomeSvg} alt="income" />
        </header>
        <strong>{totalIncome.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}</strong>
      </div>
      <div>
        <header>
          <h3>Saídas</h3>
          <img src={outcomeSvg} alt="outcome" />
        </header>
        <strong>
          {totalOutcome.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </strong>
      </div>
      <div className="highlight-background">
        <header>
          <h3>Total</h3>
          <img src={totalSvg} alt="total" />
        </header>
        <strong>
          {totalValues.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </strong>
      </div>
    </Container>
  );
}
