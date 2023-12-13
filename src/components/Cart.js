import { useSelector } from "react-redux";
import RestoMenuItems from "./RestoMenuItems";
import { useDispatch } from "react-redux"; 
import { clear } from "../utils/redux/cartSlice"; 

const Cart = () => {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const clearitems = () => {
    dispatch(clear());
  }

  return (
    <div>
      <h1 className="text-4xl font-bold text-center my-10">Cart</h1>
      <div className="filter-container">
        <button
          className="filter-button"
          style={{ backgroundColor: "bisque" }}
          onClick={clearitems}
        >
          Clear
        </button>
      </div>
      {cart.length? <RestoMenuItems itemCards={cart} />: <h1 className="text-xl font-bold text-center my-10 ">No items in the cart!</h1>}
    </div>
  );
};

export default Cart;
