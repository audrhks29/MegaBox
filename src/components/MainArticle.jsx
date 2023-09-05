
import { useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Article from './Article';
import { useSelector } from 'react-redux';
const MainArticle = () => {
    const bgRef = useRef(null);
    const articleRef = useRef(null);
    const [articleHeight, setArticleHeight] = useState(0);
    const { filteredData } = useSelector(state => state.movieR);
    useEffect(() => {
        const articleElement = articleRef.current;
        if (articleElement) {
            const { height } = articleElement.getBoundingClientRect();
            console.log("Article Height:", height);
            setArticleHeight(height);
        }
    }, [filteredData]);
    const bgStyle = {
        height: articleHeight - 30
    };
    // const handleLikeToggle = (index) => {
    //     setFilteredMovieData(prevData => {
    //         const newData = [...prevData];
    //         const updatedItem = { ...newData[index] };
    //         updatedItem.isLike = !updatedItem.isLike;
    //         updatedItem.audiCnt = updatedItem.isLike
    //             ? updatedItem.audiCnt + 1
    //             : updatedItem.audiCnt - 1;
    //         newData[index] = updatedItem;
    //         return newData;
    //     });
    // };

    return (
        <>
            <div className="bg" ref={bgRef} style={{ ...bgStyle, width: "100%" }}></div>
            <Article articleRef={articleRef} />
        </>
    );
};

export default MainArticle;