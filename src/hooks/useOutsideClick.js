import { useCallback, useEffect } from 'react';

/**
 * @desc 전달 받은 DOM 과 연관없는 것을 클릭한 경우 인자의 handler 호출
 * @param ref 기준이 되는 DOM
 * @param handler 기준이 되는 되는 DOM 외의 요소를 클릭할 경우 호출할 함수
 * @link
 * - https://chakra-ui.com/docs/hooks/use-outside-click
 *
 * TODO: 성능 개선 필요
 */
export function useOutsideClick({ ref, handler }) {
  const listener = useCallback((event) => {
    if (!ref.current || ref.current.contains(event.target)) {
      return;
    }
    handler(event);
  }, []);

  useEffect(() => {
    document.addEventListener('mousedown', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
    };
  }, [listener]);
}
