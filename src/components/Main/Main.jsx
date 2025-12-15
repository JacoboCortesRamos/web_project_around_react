import Card from "./components/Card/Card";

const cards = [
  {
    isLiked: false,
    _id: "1",
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
  },
  {
    isLiked: true,
    _id: "2",
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
  },
];

function handleCardClick(card) {
  handleOpenPopup({
    title: null,
    children: <ImagePopup card={card} />,
  });
}

export default function Main({ onCardClick }) {
  return (
    <main className="main">
      <section className="main__gallery">
        {cards.map((card) => (
          <Card key={card._id} card={card} onCardClick={onCardClick} />
        ))}
      </section>
    </main>
  );
}
