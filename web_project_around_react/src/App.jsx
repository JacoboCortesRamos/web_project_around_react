import { useState } from "react";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

import Popup from "./components/Main/components/Popup/Popup";
import NewCard from "./components/Main/components/NewCard/NewCard";
import EditProfile from "./components/Main/components/EditProfile/EditProfile";
import EditAvatar from "./components/Main/components/EditAvatar/EditAvatar";

import ImagePopup from "./components/Main/components/ImagePopup/ImagePopup";

function App() {
  const [popup, setPopup] = useState(null);

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

  const newCardPopup = { title: "New place", children: <NewCard /> };
  const editProfilePopup = { title: "Edit profile", children: <EditProfile /> };
  const editAvatarPopup = {
    title: "Change profile image",
    children: <EditAvatar />,
  };

  return (
    <div className="page__content">
      <Header
        onAddPlace={() => handleOpenPopup(newCardPopup)}
        onEditProfile={() => handleOpenPopup(editProfilePopup)}
        onEditAvatar={() => handleOpenPopup(editAvatarPopup)}
      />

      <Main onCardClick={handleCardClick} />

      <Footer />

      {popup && (
        <Popup title={popup.title} onClose={handleClosePopup}>
          {popup.children}
        </Popup>
      )}
    </div>
  );
}

export default App;
