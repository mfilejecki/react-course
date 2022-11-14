import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store/authSlice";

import classes from "./Header.module.css";

const Header = () => {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const dispach = useDispatch();

  const logoutHandler = () => {
    dispach(authActions.logout());
  };

  let authContent = (
    <nav>
      <ul>
        <li>
          <a href="/">My Products</a>
        </li>
        <li>
          <a href="/">My Sales</a>
        </li>
        <li>
          <button onClick={logoutHandler}>Logout</button>
        </li>
      </ul>
    </nav>
  );

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAuth && authContent}
    </header>
  );
};

export default Header;
