import axios from 'axios'
import { useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
const MainArticle = () => {
    const [movieData, setMovieData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [text, setText] = useState('')
    const [search, setSearch] = useState('')
    const [filteredMovieData, setFilteredMovieData] = useState([])
    const bgRef = useRef(null);
    const articleRef = useRef(null);
    const [articleHeight, setArticleHeight] = useState(0);
    useEffect(() => {
        const articleElement = articleRef.current;
        if (articleElement) {
            const { height } = articleElement.getBoundingClientRect();
            setArticleHeight(height);
        }
    }, []);
    const bgStyle = {
        height: articleHeight
    };
    console.log(articleHeight);
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
    // const onChange = (e) => {
    //     setSearch(e.target.value)
    //     setFilteredMovieData(movieData.filter(item => item.movieNm.includes(search)))
    //     console.log(e.target.value);
    // }
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
    return (
        <>
            <div className="bg" ref={bgRef} style={{ ...bgStyle, width: "100%" }}></div>
            <div className="article" ref={articleRef}>
                <h2>박스오피스</h2>
                <input type="text" value={search} onChange={onChange} placeholder='검색어를 입력하세요' />
                <div className='btnWrap'>
                    <button onClick={showAllMovie}>전체</button>
                    <button onClick={filmOnScreen}>상영중</button>
                    <button onClick={endOnScreen}>상영종료</button>
                    <h3>{filteredMovieData.length}개의 영화가 검색되었습니다.</h3>
                </div>
                <div className="BoxOffice" >
                    {
                        filteredMovieData.map((item, index) => {
                            const { imageURL, agelimit, movieNm, infoTitle, info, salesShare, openDt, audiCnt, isLike } = item;
                            return (
                                <div key={index} className="BoxOffice-item">
                                    <div className="BoxOffice-img">
                                        <img src={imageURL} style={{ width: 245, height: 350 }} alt="" />
                                    </div>
                                    <div className="BoxOffice-name">
                                        <img src={agelimit} alt="" />
                                        <span>{movieNm}</span>
                                    </div>
                                    <div className="BoxOffice-info">
                                        <span>{infoTitle}</span>
                                        {
                                            info && info.split('\n').map((splitItem, index) => {
                                                return <span key={index}>{splitItem}</span>
                                            })
                                        }
                                    </div>
                                    <div className='BoxOffice-per_date'>
                                        <span><strong>예매율 </strong>{salesShare}%</span>
                                        <span><strong>개봉일 </strong>{openDt}</span>
                                    </div>
                                    <div className='like'>
                                        <button onClick={() => handleLikeToggle(index)}><i>{isLike ? <AiFillHeart /> : <AiOutlineHeart />}<span>{numFormatter(audiCnt)}</span></i></button>
                                        <button><span>예매하기</span></button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div >
        </>
    );
};

export default MainArticle;