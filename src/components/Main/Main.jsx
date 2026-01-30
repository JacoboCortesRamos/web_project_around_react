import Card from "./components/Card/Card";

export default function Main({ cards, onCardClick, onCardLike, onCardDelete }) {
  return (
    <main className="main">
      <section className="main__gallery">
        {cards.map((card) => (
          <Card
            key={card._id}
            card={card}
            onCardClick={onCardClick}
            onCardLike={onCardLike}
            onCardDelete={onCardDelete}
          />
        ))}
      </section>
    </main>
  );
}
