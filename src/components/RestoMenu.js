import  useRestaurantMenu from "../utils/hooks/useRestaurantMenu";
import RestoCategory from "./RestoCategory";
import {useState} from 'react';

const RestoMenu = () => {
  const restoInfo = useRestaurantMenu();
  const [categoryIndex, setCategoryIndex] = useState(0);

  const { name, cuisines, costForTwoMessage } = restoInfo?.cards?.[0]?.card.card.info || {};
  const categories = restoInfo?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter( card => card.card.card["@type"]=== "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
  
  const onShowContentClick = (index) => {
    if(index===categoryIndex) setCategoryIndex(-1);
    else setCategoryIndex(index);
}
  return (
    <div>
    <div className="resto-menu-info">
      <h1 className="resto-menu-name">{name}</h1>
      <p className="resto-menu-cuisine">{cuisines?.join(", ")}</p>
      <p className="resto-menu-cost">{costForTwoMessage}</p>
    </div>
      {categories?.map( (category, index ) => <RestoCategory key={index} data={category.card.card} showContent={index===categoryIndex? true: false} setCategoryIndex={()=>onShowContentClick(index)}/> )}
    </div>
  );
};

export default RestoMenu;
