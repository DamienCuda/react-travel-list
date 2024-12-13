export default function ListItem({ item, onDeleteItem, onUpdateItem }) {
  return (
    <li>
      <input
        onChange={() => onUpdateItem(item.id)}
        type="checkbox"
        name="packed"
        id={item.id}
        value={item.packed}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button on onClick={() => onDeleteItem(item.id)}>
        ❌
      </button>
    </li>
  );
}
