
import { useDispatch, useSelector } from 'react-redux';
import { getMovieData } from '../store/modules/movieSlice';
import { useEffect } from 'react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { isPopupOpen } from '../store/modules/stateSlice';
const BoxOffice = ({ filteredItems, handleLikeToggle, numFormatter }) => {
    const { movieData, loading } = useSelector(state => state.movieR);
    const dispatch = useDispatch()
    useEffect(() => {
        if (loading) dispatch(getMovieData())
    }, [movieData]);
    const handlePopup = (index) => {
        dispatch(isPopupOpen(index))
    }
    return (
        <div className="BoxOffice" >
            {
                filteredItems.map((item, index) => {
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