
import { useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Article from './Article';
import { useDispatch, useSelector } from 'react-redux';
const MainArticle = () => {
    const { currentPage } = useSelector(state => state.paginationR);
    const { itemPerPage } = useSelector(state => state.paginationR);
    const dispatch = useDispatch();
    const [search, setSearch] = useState('')
    const [filteredMovieData, setFilteredMovieData] = useState([])
    const bgRef = useRef(null);
    const articleRef = useRef(null);
    const [articleHeight, setArticleHeight] = useState(0);
    useEffect(() => {
        const articleElement = articleRef.current;
        if (articleElement) {
            const { height } = articleElement.getBoundingClientRect();
            console.log("Article Height:", height);
            setArticleHeight(height);
        }
    }, [filteredMovieData]);
    const bgStyle = {
        height: articleHeight - 30
    };
    useEffect(() => {

    }, [])
    const handleLikeToggle = (index) => {
        setFilteredMovieData(prevData => {
            const newData = [...prevData];
            const updatedItem = { ...newData[index] };
            updatedItem.isLike = !updatedItem.isLike;
            updatedItem.audiCnt = updatedItem.isLike
                ? updatedItem.audiCnt + 1
                : updatedItem.audiCnt - 1;
            newData[index] = updatedItem;
            return newData;
        });
    };


    const numFormatter = (value) => {
        if (value > 999 && value < 1000000) {
            return (value / 1000).toFixed(1) + 'K';
        } else if (value > 1000000) {
            return (value / 1000000).toFixed(1) + 'M';
        } else if (value < 900) {
            return value;
        }
    }

    // 현재 페이지에 맞게 항목 목록 필터링
    // filteredItems = 페이지당 나오는 아이템 필터링한 데이터목록
    const filteredItems = filteredMovieData.slice((currentPage - 1) * itemPerPage, currentPage * itemPerPage);
    return (
        <>
            <div className="bg" ref={bgRef} style={{ ...bgStyle, width: "100%" }}></div>
            <Article handleLikeToggle={handleLikeToggle} numFormatter={numFormatter} articleRef={articleRef} search={search} filteredMovieData={filteredMovieData} filteredItems={filteredItems} />
        </>
    );
};

export default MainArticle;