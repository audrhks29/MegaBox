import axios from 'axios'
import { useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

import Article from './Article';

const MainArticle = () => {
    const [movieData, setMovieData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [search, setSearch] = useState('')
    const [filteredMovieData, setFilteredMovieData] = useState([])
    const bgRef = useRef(null);
    const articleRef = useRef(null);
    const [articleHeight, setArticleHeight] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedMovieIndex, setSelectedMovieIndex] = useState()
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
        const url = `https://gist.githubusercontent.com/audrhks29/4d151f01eb80528030a419ef7db92693/raw/a1ae6d550a05a2fd20fecf1bdf7e3e477bfe63dd/movie.json`
        axios.get(url)
            .then(res => {
                setMovieData(res.data)
                setFilteredMovieData(res.data)
                setLoading(true)
                setError(null)
                console.log(res.data);
            })
            .catch(error => {
                setMovieData([])
                setLoading(false)
                setError('api주소를 확인하세요')
            })
    }, [])
    const handleLikeToggle = (index) => {
        setFilteredMovieData(prevData => {
            const newData = [...prevData];
            const updatedItem = { ...newData[index] };
            updatedItem.isLike = !updatedItem.isLike;
            updatedItem.audiCnt = updatedItem.isLike ? updatedItem.audiCnt + 1 : updatedItem.audiCnt - 1;
            newData[index] = updatedItem;
            return newData;
        });
    };
    const onChange = (e) => {
        const inputValue = e.target.value;
        setSearch(inputValue);
        setFilteredMovieData(movieData.filter(item => item.movieNm.includes(inputValue)));
    };
    const showAllMovie = () => {
        setFilteredMovieData(movieData)
    }
    const filmOnScreen = () => {
        setFilteredMovieData(movieData.filter(item => item.screening === true))
    }
    const endOnScreen = () => {
        setFilteredMovieData(movieData.filter(item => item.screening === false))
    }
    const numFormatter = (value) => {
        if (value > 999 && value < 1000000) {
            return (value / 1000).toFixed(1) + 'K';
        } else if (value > 1000000) {
            return (value / 1000000).toFixed(1) + 'M';
        } else if (value < 900) {
            return value;
        }
    }
    const popUpOpen = (index) => {
        setIsOpen(true)
        setSelectedMovieIndex(index)
        console.log(isOpen);
    }
    // 페이지당 갯수
    const itemPerPage = 8
    // 현재 페이지
    const [currentPage, setCurrentPage] = useState(1);
    // 현재 페이지에 맞게 항목 목록 필터링
    // filteredItems = 페이지당 나오는 아이템 필터링한 데이터목록
    const filteredItems = filteredMovieData.slice((currentPage - 1) * itemPerPage, currentPage * itemPerPage);
    const lastPage = Math.round(filteredMovieData.length / itemPerPage)
    // 이전 페이지로 이동
    const goToPreviousPage = () => {
        if (currentPage === 1) return;
        setCurrentPage((prevPage) => prevPage - 1);
    };
    // 다음 페이지로 이동
    const goToNextPage = () => {
        if (currentPage === lastPage) return;
        setCurrentPage((nextPage) => nextPage + 1);
    };
    // 클릭한 페이지로 이동
    const goToClickPage = (page) => {
        setCurrentPage(page);
    }
    // 페이지 갯수 생성
    const totalPage = Array.from({ length: lastPage }, (_, index) => index + 1);
    console.log(totalPage);
    return (
        <>
            <div className="bg" ref={bgRef} style={{ ...bgStyle, width: "100%" }}></div>
            <Article handleLikeToggle={handleLikeToggle} onChange={onChange} showAllMovie={showAllMovie} filmOnScreen={filmOnScreen} endOnScreen={endOnScreen} numFormatter={numFormatter} popUpOpen={popUpOpen} articleRef={articleRef} search={search} filteredMovieData={filteredMovieData} isOpen={isOpen} selectedMovieIndex={selectedMovieIndex} setIsOpen={setIsOpen} filteredItems={filteredItems} goToPreviousPage={goToPreviousPage} totalPage={totalPage} goToClickPage={goToClickPage} goToNextPage={goToNextPage} currentPage={currentPage} />

        </>
    );
};

export default MainArticle;