
import { useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Article from './Article';
import { useSelector } from 'react-redux';
import { BgImageContainer } from '../styled/commonStyle';
const MainArticle = () => {
    const bgRef = useRef(null);
    const articleRef = useRef(null);
    const [articleHeight, setArticleHeight] = useState(0);
    const { pagingData } = useSelector(state => state.movieR);
    useEffect(() => {
        const articleElement = articleRef.current;
        if (articleElement) {
            const { height } = articleElement.getBoundingClientRect();
            console.log("Article Height:", height);
            setArticleHeight(height);
        }
    }, [pagingData]);
    const bgStyle = {
        height: articleHeight - 30
    };

    return (
        <>
            <BgImageContainer ref={bgRef} style={{ ...bgStyle }}></BgImageContainer>
            <Article articleRef={articleRef} />
        </>
    );
};

export default MainArticle;