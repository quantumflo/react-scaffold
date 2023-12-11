import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { SWIGGY_MENU_API, CORSPROXY } from "../constants";

const useRestaurantMenu = () => {
    const [restoInfo, setRestoInfo] = useState([]);
    const { resId } = useParams();
  
    useEffect(() => {
      fetchMenu();
    }, []);
  
    const fetchMenu = async () => {
      const data = await fetch( `${CORSPROXY}${SWIGGY_MENU_API}${resId}` );
  
      const jsonData = await data.json();
      setRestoInfo(jsonData?.data || []);
    };

    return restoInfo;
}

export default useRestaurantMenu;