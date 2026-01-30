import { useState } from "react";

export default function NewCard({ onAddPlaceSubmit }) {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlaceSubmit({ name, link });
  }

  return (
    <form className="popup__form" name="card-form" id="new-card-form" noValidate onSubmit={handleSubmit}>
      <input
        className="popup__input popup__input_type_card-name"
        id="card-name"
        maxLength="30"
        minLength="1"
        name="card-name"
        placeholder="Title"
        required
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <span className="popup__input-error" id="card-name-error"></span>

      <input
        className="popup__input popup__input_type_url"
        id="card-link"
        name="link"
        placeholder="Image link"
        required
        type="url"
        value={link}
        onChange={(e) => setLink(e.target.value)}
      />
      <span className="popup__input-error" id="card-link-error"></span>

      <button className="popup__save-button button" type="submit">
        Save
      </button>
    </form>
  );
}
