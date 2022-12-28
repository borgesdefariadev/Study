import "./styles.css";
import { Card } from "../../components/Card";

export function Home() {
  return (
    <div className="container">
      <h1>Lista da reunião</h1>
      <input type="text" placeholder="Digite o nome..." />
      <button type="button">Adicionar membro</button>
      <Card name="Ricardo Borges" hour="10:10:10" />
      <Card name="Zuleinilson" hour="15:35:28" />
      <Card name="Incel Cringeval" hour="12:15:10" />
    </div>
  );
}
