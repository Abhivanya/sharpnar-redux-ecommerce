import { useDispatch } from "react-redux";
import CartButton from "../Cart/CartButton";
import classes from "./MainHeader.module.css";
import { uiActions } from "../../store/uiSlice.js";

const MainHeader = (props) => {
  const dispatch = useDispatch();

  const handleCartToggle = () => {
    dispatch(uiActions.toggleCart());
  };

  return (
    <header className={classes.header}>
      <h1>ReduxCart</h1>
      <nav>
        <ul>
          <li onClick={handleCartToggle}>
            <CartButton />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
