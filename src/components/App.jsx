import { useEffect, useState } from "react";

import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";

import Popup from "./Main/components/Popup/Popup";
import NewCard from "./Main/components/NewCard/NewCard";
import EditProfile from "./Main/components/EditProfile/EditProfile";
import EditAvatar from "./Main/components/EditAvatar/EditAvatar";
import ImagePopup from "./Main/components/ImagePopup/ImagePopup";

import api from "../utils/api";
import CurrentUserContext from "../contexts/CurrentUserContext";

function App() {
  const [popup, setPopup] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([userData, cardsData]) => {
        setCurrentUser(userData);
        setCards(cardsData);
      })
      .catch((err) => console.error(err));
  }, []);

  function handleOpenPopup(popupData) {
    setPopup(popupData);
  }

  function handleClosePopup() {
    setPopup(null);
  }

  function handleCardClick(card) {
    handleOpenPopup({
      title: null,
      children: <ImagePopup card={card} />,
    });
  }

  function handleAddPlaceSubmit(data) {
    api
      .addCard(data)
      .then((newCard) => {
        setCards((prevCards) => [newCard, ...prevCards]);
        handleClosePopup();
      })
      .catch((err) => console.error(err));
  }

  function handleUpdateUser(data) {
    api
      .updateUserInfo(data)
      .then((newUserData) => {
        setCurrentUser(newUserData);
        handleClosePopup();
      })
      .catch((err) => console.error(err));
  }

  function handleUpdateAvatar(data) {
    api
      .updateAvatar(data)
      .then((newUserData) => {
        setCurrentUser(newUserData);
        handleClosePopup();
      })
      .catch((err) => console.error(err));
  }

  function handleCardLike(card) {
    const isLiked = Boolean(card.isLiked);

    const request = isLiked ? api.unlikeCard(card._id) : api.likeCard(card._id);

    request
      .then((newCard) => {
        setCards((state) =>
          state.map((c) => (c._id === card._id ? newCard : c)),
        );
      })
      .catch((err) => console.error(err));
  }

  function handleCardDelete(card) {
    api
      .deleteCard(card._id)
      .then(() => {
        setCards((state) => state.filter((c) => c._id !== card._id));
      })
      .catch((err) => console.error(err));
  }

  const newCardPopup = {
    title: "New place",
    children: <NewCard onAddPlaceSubmit={handleAddPlaceSubmit} />,
  };
  const editProfilePopup = { title: "Edit profile", children: <EditProfile /> };
  const editAvatarPopup = {
    title: "Change profile image",
    children: <EditAvatar />,
  };

  return (
    <CurrentUserContext.Provider
      value={{ currentUser, handleUpdateUser, handleUpdateAvatar }}
    >
      <div className="page__content">
        <Header
          onAddPlace={() => handleOpenPopup(newCardPopup)}
          onEditProfile={() => handleOpenPopup(editProfilePopup)}
          onEditAvatar={() => handleOpenPopup(editAvatarPopup)}
        />

        <Main
          cards={cards}
          onCardClick={handleCardClick}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
        />

        <Footer />

        {popup && (
          <Popup title={popup.title} onClose={handleClosePopup}>
            {popup.children}
          </Popup>
        )}
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
