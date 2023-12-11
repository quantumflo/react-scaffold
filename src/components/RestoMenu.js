import  useRestaurantMenu from "../utils/hooks/useRestaurantMenu";

const RestoMenu = () => {
  const restoInfo = useRestaurantMenu();
  const { name, cuisines, costForTwoMessage } = restoInfo?.cards?.[0]?.card.card.info || {};
  const { itemCards } = restoInfo?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card || [];

  const MenuItems = () => {
    return (
      <div className="menu-container">
        {itemCards?.map((item, index) => {
          const { name, price, category, imageId } = item?.card?.info || {};
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
                <p className="menu-price">&#8377;{price / 100}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div>
    <div className="resto-menu-info">
      <h1 className="resto-menu-name">{name}</h1>
      <p className="resto-menu-cuisine">{cuisines?.join(", ")}</p>
      <p className="resto-menu-cost">{costForTwoMessage}</p>
    </div>
      <MenuItems />
    </div>
  );
};

export default RestoMenu;
