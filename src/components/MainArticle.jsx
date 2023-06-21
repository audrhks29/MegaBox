import axios from 'axios'
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
    useEffect(() => {
        const url = `https://gist.githubusercontent.com/audrhks29/8d111972680ab3319c173096829c7504/raw/b7fb9dcbe3ddb9754bba0980707253c809180823/movie.json`
        axios.get(url)
            .then(res => {
                setMovieData(res.data)
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
        setMovieData(prevData => {
            const newData = [...prevData];
            newData[index] = { ...newData[index], isLike: !newData[index].isLike };
            return newData;
        });
    };
    const filteredData = movieData.filter(item => item.movieNm.includes(search))
    const onChange = (e) => {
        setSearch(e.target.value)
    }
    return (
        <>
            <div className="article">
                <h2>박스오피스</h2>
                <input type="text" value={search} onChange={onChange} placeholder='검색어를 입력하세요' />
                <div className="BoxOffice" >
                    {
                        filteredData.map((item, index) => {
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
                                        <button onClick={() => handleLikeToggle(index)}><i>{isLike ? <AiFillHeart /> : <AiOutlineHeart />}<span>{audiCnt}</span></i></button>
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