
import { useDispatch, useSelector } from 'react-redux';
import { getMovieData, showAllMovie } from '../store/modules/movieSlice';
import { useEffect } from 'react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { isPopupOpen } from '../store/modules/stateSlice';
const BoxOffice = () => {
    const { pagingData, movieData, loading } = useSelector(state => state.movieR);
    const dispatch = useDispatch()
    useEffect(() => {
        if (loading) dispatch(getMovieData())
    }, [movieData]);
    const handlePopup = (index) => {
        dispatch(isPopupOpen(index))
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
        <div className="BoxOffice" >
            {
                pagingData.map((item, index) => {
                    return (
                        <div key={index} className="BoxOffice-item">
                            <div className="BoxOffice-img">
                                <img src={item.imageURL} style={{ width: 245, height: 350 }} alt="" />
                            </div>
                            <div className="BoxOffice-name">
                                <img src={item.agelimit} alt="" />
                                <span >{item.movieNm}</span>
                            </div>
                            <div className="BoxOffice-info" onClick={() => handlePopup(index)}>
                                <span>{item.infoTitle}</span>
                                {
                                    item.info && item.info.split('\n').map((splitItem, index) => {
                                        return <span key={index}>{splitItem}</span>
                                    })
                                }
                            </div>
                            <div className='BoxOffice-per_date'>
                                <span><strong>예매율 </strong>{item.salesShare}%</span>
                                <span><strong>개봉일 </strong>{item.openDt}</span>
                            </div>
                            <div className='like' >
                                <button
                                    onClick={() => handleLikeToggle(index)}
                                >
                                    <i>
                                        {
                                            item.isLike
                                                ? <AiFillHeart />
                                                : <AiOutlineHeart />
                                        }
                                        <span>{numFormatter(item.audiCnt)}</span>
                                    </i>
                                </button>
                                <button><span>예매하기</span></button>
                            </div >
                        </div>
                    )
                })
            }
        </div>

    );
};

export default BoxOffice;