import { useCollection } from "../../hooks/useCollection";
import * as S from "./style";
import Moment from "react-moment";
import { BsTrash } from "react-icons/bs";
import { useFirestore } from "../../hooks/useFirestore";


export function TransactionsTable() {
  const { documents } = useCollection("transactions");
  const { deleteDocument } = useFirestore("transactions");

  const handleDelete = (id: any) => {
    deleteDocument(id);
  };

  return (
    <S.Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {documents.map((doc) => (
            <tr key={doc.id}>
              <td>{doc.titulo}</td>
              <S.PriceField type={doc.type}>
                {(doc.type === "withdraw"
                  ? -doc.valor
                  : doc.valor
                ).toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </S.PriceField>
              <td>{doc.categoria}</td>
              <td className="date">
                <Moment format="DD/MM/YYYY">{doc.createdAt.toDate()}</Moment>
                <span onClick={() => handleDelete(doc.id)} className="icon">
                  <BsTrash size={20} />
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </S.Container>
  );
}
