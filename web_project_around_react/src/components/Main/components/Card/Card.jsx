import trashIcon from "../../../../images/Trash-Icon.svg";

export default function Card(props) {
  const { card, onCardClick } = props;
  const { name, link, isLiked } = card;

  return (
    <div className="main__gallery-item">
      <img
        className="main__gallery-image"
        src={link}
        alt={name}
        onClick={() => onCardClick(card)}
      />

      <button className="main__gallery-delete-button button" type="button">
        <img
          className="main__gallery-delete-icon"
          src={trashIcon}
          alt="Delete Icon"
        />
      </button>

      <div className="main__gallery-info">
        <h2 className="main__gallery-photo-title">{name}</h2>

        <button
          className={`main__gallery-like-button button ${
            isLiked ? "main__gallery-like-button_active" : ""
          }`}
          type="button"
          aria-label="Like card"
        />
      </div>
    </div>
  );
}
