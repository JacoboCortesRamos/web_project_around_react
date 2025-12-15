export default function EditAvatar() {
  return (
    <form className="popup__form" name="avatar-form" id="edit-avatar-form" noValidate>
      <input
        className="popup__input popup__input_type_url"
        id="avatar-link"
        name="link"
        placeholder="Image URL"
        required
        type="url"
      />
      <span className="popup__input-error" id="avatar-link-error"></span>

      <button className="popup__save-button button" type="submit" disabled>
        Save
      </button>
    </form>
  );
}
