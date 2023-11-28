import Article from './Article';
import { useDispatch, useSelector } from 'react-redux';
import { BgImageContainer } from '../styled/commonStyle';
import { useEffect, useState } from 'react';
import { getMovieData } from '../store/modules/movieSlice';
const MainArticle = () => {
  const [scrollHeight, setScrollHeight] = useState(0);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getMovieData())
      .then(() => {
        setScrollHeight(document.documentElement.scrollHeight);
      });
  }, []);

  return (
    <>
      <BgImageContainer scrollheight={scrollHeight}></BgImageContainer>
      <Article />
    </>
  );
};

export default MainArticle;