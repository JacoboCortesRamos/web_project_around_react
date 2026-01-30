import { useContext } from "react";
import trashIcon from "../../../../images/Trash-Icon.svg";
import CurrentUserContext from "../../../../contexts/CurrentUserContext";

export default function Card({ card, onCardClick, onCardLike, onCardDelete }) {
  const { currentUser } = useContext(CurrentUserContext) || {};

  const isOwn = currentUser && card.owner === currentUser._id;
  const isLiked = Boolean(card.isLiked);

  const likeButtonClassName = `main__gallery-like-button button ${
    isLiked ? "main__gallery-like-button_active" : ""
  }`;

  function handleLikeClick() {
    onCardLike(card);
  }

  function handleDeleteClick() {
    onCardDelete(card);
  }

  return (
    <div className="main__gallery-item">
      <img
        className="main__gallery-image"
        src={card.link}
        alt={card.name}
        onClick={() => onCardClick(card)}
      />

      {isOwn && (
        <button
          className="main__gallery-delete-button button"
          type="button"
          onClick={handleDeleteClick}
        >
          <img src={trashIcon} alt="Delete Icon" />
        </button>
      )}

      <div className="main__gallery-info">
        <h2 className="main__gallery-photo-title">{card.name}</h2>

        <button
          className={likeButtonClassName}
          type="button"
          aria-label="Like card"
          onClick={handleLikeClick}
        />
      </div>
    </div>
  );
}
