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
    let response = null;
    try {
      response = await fetch(`${CORSPROXY}${SWIGGY_MENU_API}${resId}`);
      if (!response.ok) {
        if (response.status === 403) throw new Error("CORS API call failed");
      }
    } catch (e) {
      response = await fetch(`${SWIGGY_MENU_API}${resId}`);
    }

    const jsonData = await response.json();
    setRestoInfo(jsonData?.data || []);
  };

  return restoInfo;
};

export default useRestaurantMenu;
