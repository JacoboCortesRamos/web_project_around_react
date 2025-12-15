export default function ImagePopup({ card }) {
    const { name, link, } = card;

     return (
    <div className="image-popup__container">
      <img className="image-popup__image" src={link} alt={name} />
      <h2 className="image-popup__title">{name}</h2>
    </div>
  );
}
