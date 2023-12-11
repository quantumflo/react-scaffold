import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [online, setOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = (status) => {
      setOnline(status);
    };

    window.addEventListener("online", () => handleOnline(true));
    window.addEventListener("offline", () => handleOnline(false));
  
    // Remove event listeners on component unmount
    return () => {
      window.removeEventListener("online", () => handleOnline(true));
      window.removeEventListener("offline", () => handleOnline(false));
    };
  }, []);

  return online;
};

export default useOnlineStatus;
