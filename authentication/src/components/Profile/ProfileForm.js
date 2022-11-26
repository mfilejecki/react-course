import { useRef, useContext } from "react";

import AuthContext, { API_KEY } from "../../store/auth-context";

import classes from "./ProfileForm.module.css";

const ProfileForm = () => {
  const newPasswordInputRef = useRef();

  const authCtx = useContext(AuthContext);
  const { token } = authCtx;

  const changePasswordHandler = async (event) => {
    event.preventDefault();

    const newPasswordValue = newPasswordInputRef.current.value;

    // TODO add validation

    const response = await fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:update?key=${API_KEY}`,
      {
        method: "POST",
        body: JSON.stringify({
          idToken: token,
          password: newPasswordValue,
          returnSecureToken: false,
        }),
      }
    );

    if (!response.ok) {
      return;
    }
  };

  return (
    <form className={classes.form} onSubmit={changePasswordHandler}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input type="password" id="new-password" ref={newPasswordInputRef} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
