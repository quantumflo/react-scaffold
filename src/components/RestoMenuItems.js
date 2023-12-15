const {useDispatch} = require("react-redux");
const {addItem} = require("../utils/redux/cartSlice");

const RestoMenuItems = ({ itemCards }) => {
  const dispatch = useDispatch();
  const addItemClick = (item) => {
    dispatch(addItem(item));
  }

  return (
    <div className="menu-container">
      {itemCards?.map((item, index) => {
        const { name, defaultPrice, price, category, imageId } =
          item?.card?.info || {};
        return (
          <div key={index} className="menu-item">
            <div className="menu-image-container">
              <img
                src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${imageId}`}
                alt="food"
              />
            </div>
            <div className="menu-text-container">
              <h3 className="menu-item-name">{name}</h3>
              <p className="menu-category">{category}</p>
              <p className="menu-price">
                &#8377;{price ? price / 100 : defaultPrice / 100}
              </p>
            </div>

            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline shadow-md"
              type="button"
              onClick={() => addItemClick(item)}
            >
              Add +
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default RestoMenuItems;
