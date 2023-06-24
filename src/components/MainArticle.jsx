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
        height: articleHeight
    };
    useEffect(() => {
        const url = `https://gist.githubusercontent.com/audrhks29/8d111972680ab3319c173096829c7504/raw/b7fb9dcbe3ddb9754bba0980707253c809180823/movie.json`
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
    return (
        <>
            <div className="bg" ref={bgRef} style={{ ...bgStyle, width: "100%" }}></div>
            <Article handleLikeToggle={handleLikeToggle} onChange={onChange} showAllMovie={showAllMovie} filmOnScreen={filmOnScreen} endOnScreen={endOnScreen} numFormatter={numFormatter} popUpOpen={popUpOpen} articleRef={articleRef} search={search} filteredMovieData={filteredMovieData} isOpen={isOpen} selectedMovieIndex={selectedMovieIndex} setIsOpen={setIsOpen} />
        </>
    );
};

export default MainArticle;