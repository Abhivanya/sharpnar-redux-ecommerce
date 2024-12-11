import { useSelector } from "react-redux";
import classes from "./CartButton.module.css";

const CartButton = (props) => {
  const count = useSelector((state) => state.totalCount);
  console.log(count);
  return (
    <button className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{count}</span>
    </button>
  );
};

export default CartButton;
