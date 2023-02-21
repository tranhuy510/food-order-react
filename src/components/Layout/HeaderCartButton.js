import { useContext, useState, useEffect } from "react";

import styles from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";

export default function HeaderCartButton(props) {
  const [btnIsHighLight, setBtnIsHighLight] = useState(false);
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;

  const numberOfOrder = items.reduce((cur, item) => cur + item.amount, 0);

  useEffect(() => {
    if (items.length === 0) return;
    setBtnIsHighLight(true);

    const timeout = setTimeout(() => {
      setBtnIsHighLight(false);
    }, 300);

    return () => {
      clearTimeout(timeout);
    };
  }, [items]);

  const btnStyles = `${styles.button} ${btnIsHighLight ? styles.bump : ""}`;

  return (
    <button className={btnStyles} onClick={props.onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{numberOfOrder}</span>
    </button>
  );
}
