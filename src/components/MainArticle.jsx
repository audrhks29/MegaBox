

import Article from './Article';
import { useSelector } from 'react-redux';
import { BgImageContainer } from '../styled/commonStyle';
import { useEffect, useState } from 'react';
const MainArticle = () => {
    const { movieData } = useSelector(state => state.movieR);
    const [scrollHeight, setScrollHeight] = useState(window.innerHeight);

    useEffect(() => {
        setScrollHeight(document.documentElement.scrollHeight);
    }, [movieData]);
    console.log(scrollHeight);

    return (
        <>
            <BgImageContainer scrollheight={scrollHeight}></BgImageContainer>
            <Article />
        </>
    );
};

export default MainArticle;