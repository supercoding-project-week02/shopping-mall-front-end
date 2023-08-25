import { useEffect } from 'react';

export function ScrollToTop({ children }) {
  useEffect(() => {
    // GYU-TODO: 더 좋은 방법이 없을까?
    // infinite scroll 로 인해 계속 증가되는 이슈가 있어서, setTimeout 으로 처리
    window.scrollTo({ top: 0 });
    setTimeout(() => window.scrollTo({ top: 0 }), 0);
  }, []);

  return children;
}
