export default function Stats({ items }) {
  if (!items.length)
    return (
      <footer className="stats">
        Ajoutez vos premiers éléments à la liste ! 🚀
      </footer>
    );

  const totalItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const donePourcentage = Math.round((numPacked / totalItems) * 100);

  return (
    <footer className="stats">
      <p>
        <em>
          {donePourcentage === 100
            ? "Vous avez tout emballé ! Prêt au départ ✈️"
            : `🧳Vous avez ${totalItems} objets sur votre liste. Vous en avez déjà emballé ${numPacked} (${donePourcentage}%) ! ✈️`}
        </em>
      </p>
    </footer>
  );
}
