import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top with a slight delay to ensure any animations or component mounts complete first
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 0   );
  }, [pathname]);

  return null;
}

export default ScrollToTop;
