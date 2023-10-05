import { Fragment, useContext } from "react";
import CartCard from "../components/card/CartCard";
import { ProductsContext } from "../context/ProductsContext";

import "./Pages.css";

const CartPage = () => {
  const { cart } = useContext(ProductsContext);
  let totalPrice = cart.map(pr => pr.quantity * pr.price);
  let result = 0;
  for (let price of totalPrice) {
    result += price;
  }
  return (
    <Fragment>
      <section>
        <div className="container-md">
          <h1 className="card-title">Ваш заказ</h1>
          <div className="cart-row">
            {cart.map((product) => (
              <CartCard key={product.id} {...product} />
            ))}
          </div>
          <div className="card-total">
            <p className="total-price">
              Итого: <span className="final-price">{result} ₽</span>
            </p>
            <button className="submit-btn">Оформить заказ</button>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default CartPage;
