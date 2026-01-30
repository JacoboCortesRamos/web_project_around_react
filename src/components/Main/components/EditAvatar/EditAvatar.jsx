import { useContext, useEffect, useRef } from "react";
import CurrentUserContext from "../../../../contexts/CurrentUserContext";

export default function EditAvatar() {
  const { handleUpdateAvatar } = useContext(CurrentUserContext) || {};
  const avatarRef = useRef(null);

  useEffect(() => {
    if (avatarRef.current) avatarRef.current.value = "";
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    if (!avatarRef.current.value) return;
    handleUpdateAvatar({ avatar: avatarRef.current.value });
  }

  return (
    <form
      className="popup__form"
      name="avatar-form"
      id="edit-avatar-form"
      noValidate
      onSubmit={handleSubmit}
    >
      <input
        className="popup__input popup__input_type_url"
        id="avatar-link"
        name="link"
        placeholder="Image URL"
        required
        type="url"
        ref={avatarRef}
      />
      <span className="popup__input-error" id="avatar-link-error"></span>

      <button className="popup__save-button button" type="submit">
        Save
      </button>
    </form>
  );
}
