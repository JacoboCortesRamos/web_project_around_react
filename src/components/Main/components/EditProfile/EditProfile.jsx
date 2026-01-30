import { useContext, useEffect, useState } from "react";
import CurrentUserContext from "../../../../contexts/CurrentUserContext";

export default function EditProfile() {
  const { currentUser, handleUpdateUser } =
    useContext(CurrentUserContext) || {};

  const [name, setName] = useState("");
  const [about, setAbout] = useState("");

  useEffect(() => {
    if (!currentUser) return;
    setName(currentUser.name || "");
    setAbout(currentUser.about || "");
  }, [currentUser]);

  function handleSubmit(e) {
    e.preventDefault();
    handleUpdateUser({ name, about });
  }

  return (
    <form
      className="popup__form"
      name="profile-form"
      id="edit-profile-form"
      noValidate
      onSubmit={handleSubmit}
    >
      <input
        className="popup__input popup__input_type_name"
        type="text"
        placeholder="Name"
        name="name"
        minLength="2"
        maxLength="40"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <span className="popup__input-error popup__input-error_type_name"></span>

      <input
        className="popup__input popup__input_type_about"
        type="text"
        placeholder="About me"
        name="about"
        minLength="2"
        maxLength="200"
        required
        value={about}
        onChange={(e) => setAbout(e.target.value)}
      />
      <span className="popup__input-error popup__input-error_type_about"></span>

      <button className="popup__save-button button" type="submit">
        Save
      </button>
    </form>
  );
}
