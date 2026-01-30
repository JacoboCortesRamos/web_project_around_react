import { useContext } from "react";
import logo from "../../images/Vector-logo.svg";
import editProfileImageIcon from "../../images/Edit-Profile-Image-Icon.png";
import editIcon from "../../images/Edit-Icon.png";
import addIcon from "../../images/Add-Icon.png";
import CurrentUserContext from "../../contexts/CurrentUserContext";

export default function Header({ onAddPlace, onEditProfile, onEditAvatar }) {
  const { currentUser } = useContext(CurrentUserContext) || {};

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo-container">
          <img className="header__logo" src={logo} alt="Logo" />
        </div>

        <div className="header__profile-container">
          <div className="header__profile-image-container">
            <img
              className="header__profile-image"
              src={currentUser?.avatar || ""}
              alt="Profile Image"
            />

            <button
              className="header__change-image-button button"
              type="button"
              onClick={onEditAvatar}
            >
              <img
                className="header__change-image-icon"
                src={editProfileImageIcon}
                alt="Change Image Icon"
              />
            </button>
          </div>

          <div className="header__profile-info">
            <div className="header__title-container">
              <h1 className="header__title">{currentUser?.name || ""}</h1>

              <button
                className="header__edit-button button"
                type="button"
                onClick={onEditProfile}
              >
                <img
                  className="header__edit-icon"
                  src={editIcon}
                  alt="Edit Icon"
                />
              </button>
            </div>

            <p className="header__subtitle">{currentUser?.about || ""}</p>
          </div>

          <button
            className="header__add-button button"
            type="button"
            onClick={onAddPlace}
          >
            <img
              className="header__add-icon button__icon"
              src={addIcon}
              alt="Add Icon"
            />
          </button>
        </div>
      </div>
    </header>
  );
}
