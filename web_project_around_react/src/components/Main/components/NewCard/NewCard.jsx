export default function NewCard() {
  return (
    <form className="popup__form" name="card-form" id="new-card-form" noValidate>
      <input
        className="popup__input popup__input_type_card-name"
        id="card-name"
        maxLength="30"
        minLength="1"
        name="card-name"
        placeholder="Title"
        required
        type="text"
      />
      <span className="popup__input-error" id="card-name-error"></span>

      <input
        className="popup__input popup__input_type_url"
        id="card-link"
        name="link"
        placeholder="Image link"
        required
        type="url"
      />
      <span className="popup__input-error" id="card-link-error"></span>

      <button className="popup__save-button button" type="submit" disabled>
        Save
      </button>
    </form>
  );
}
