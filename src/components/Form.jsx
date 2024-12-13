import { useState } from "react";

export default function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(event) {
    event.preventDefault();
    if (!description) return;
    const newItem = { description, quantity, packed: false, id: Date.now() };
    onAddItems(newItem);
    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>De quoi avez-vous besoin pour votre 😍 voyage ? </h3>
      <input
        type="number"
        min="1"
        max="100"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      ></input>
      <input
        type="text"
        placeholder="On emballe quoi ?"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Ajouter</button>
    </form>
  );
}
