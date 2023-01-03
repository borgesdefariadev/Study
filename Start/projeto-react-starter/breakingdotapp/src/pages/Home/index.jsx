import "./styles.css";
import { Card } from "../../components/Card";
import React, { useState } from "react";

export function Home() {
  const [cardName, setCardName] = useState("");
  const [card, setCard] = useState([]);

  function handleAddCard() {
    const newCard = {
      name: cardName,
      time: new Date().toLocaleTimeString("pt-br", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }),
    };

    setCard((prevState) => [...prevState, newCard]);
  }

  return (
    <div className="container">
      <h1>Test Page</h1>
      <input
        type="text"
        placeholder="Digite o número..."
        onChange={(e) => setCardName(e.target.value)}
      />
      <button type="button" onClick={handleAddCard}>
        Adicionar
      </button>
      {card.map((card) => (
        <Card key={card.time} name={card.name} hour={card.time} />
      ))}
    </div>
  );
}
