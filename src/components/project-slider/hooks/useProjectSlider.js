import { useState } from 'react';
import { useInterval } from '../../../lib/useInterval';

function useProjectSlider(items, onArticleClick, delayTransition) {
  const [currentArticleIndex, setCurrentArticleIndex] = useState(0);
  useInterval(() => {
    setCurrentArticleIndex(
      items[currentArticleIndex + 1] ? currentArticleIndex + 1 : 0,
    );
  }, delayTransition);
  return {
    articles: items,
    currentArticleIndex,
    onArticleClick,
    onChangeArticle: (index) => {
      setCurrentArticleIndex(index);
    },
  };
}

export default useProjectSlider;
