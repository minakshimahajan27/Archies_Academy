import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Page ko sabse upar (0,0) par bhej deta hai
    window.scrollTo(0, 0);
  }, [pathname]); // Jab bhi path change hoga, ye chalega

  return null;
};

export default ScrollToTop;