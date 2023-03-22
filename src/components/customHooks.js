import { useCallback } from 'react';

export function useShuffleArray(setArray) {
  const shuffleArray = useCallback(() => {
    setArray((prevArray) => {
      const newArray = [...prevArray];
      for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
      }
      return newArray;
    });
  }, [setArray]);

  return shuffleArray;
}
