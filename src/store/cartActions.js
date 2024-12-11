import { uiActions } from "./uiSlice";
import { cartActions } from "./cartSlice";

const showNotification = (dispatch, status, title, message) => {
  dispatch(
    uiActions.showNotification({
      status,
      title,
      message,
    })
  );
};

export const addCartItem = (cart) => {
  return async (dispatch) => {
    showNotification(dispatch, "pending", "Sending...", "Storing cart data!");

    try {
      const response = await fetch(
        "https://ecommerce-app-8a641-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to store cart data!");
      }

      const resData = await response.json();

      dispatch(cartActions.replaceCart(cart));
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: error.message,
        })
      );
      console.error(error);
    }
  };
};

export const getCartItems = () => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data!",
      })
    );
    try {
      const response = await fetch(
        "https://ecommerce-app-8a641-default-rtdb.firebaseio.com/cart.json"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch cart data!");
      }

      const cartData = await response.json();

      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Sent cart data successfully!",
        })
      );
      dispatch(cartActions.replaceCart(cartData));
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Sending cart data failed!",
        })
      );
      console.error(error);
    }
  };
};
