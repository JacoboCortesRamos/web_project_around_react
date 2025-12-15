export default function EditProfile() {
  return (
    <form className="popup__form" name="profile-form" id="edit-profile-form" noValidate>
      <input
        className="popup__input popup__input_type_name"
        type="text"
        placeholder="Name"
        name="name"
        minLength="2"
        maxLength="40"
        required
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
      />
      <span className="popup__input-error popup__input-error_type_about"></span>

      <button className="popup__save-button button" type="submit" disabled>
        Save
      </button>
    </form>
  );
}
