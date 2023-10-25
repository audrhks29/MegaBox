

import Article from './Article';
import { useSelector } from 'react-redux';
import { BgImageContainer } from '../styled/commonStyle';
import { useLayoutEffect, useState } from 'react';
const MainArticle = () => {
    const { movieData, pagingData, loading } = useSelector(state => state.movieR);
    const [scrollHeight, setScrollHeight] = useState(window.innerHeight);

    useLayoutEffect(() => {
        setScrollHeight(document.documentElement.scrollHeight);
    }, [movieData, pagingData, loading]);

    return (
        <>
            <BgImageContainer scrollHeight={scrollHeight}></BgImageContainer>
            <Article />
        </>
    );
};

export default MainArticle;