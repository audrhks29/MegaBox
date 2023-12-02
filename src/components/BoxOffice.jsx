
import { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { toggleLike } from '../store/modules/movieSlice';
import { isPopupOpen } from '../store/modules/stateSlice';

import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

import { BoxOfficeContainer, BoxOfficeItem } from '../styled/BoxOfficeStyle';

const BoxOffice = () => {
  const { pagingData } = useSelector(state => state.movieR);
  const dispatch = useDispatch()
  const [onLoaded, setOnLoaded] = useState([])

  const handlePopup = (index) => {
    dispatch(isPopupOpen(index))
  }

  const handleLikeToggle = (index) => {
    dispatch(toggleLike({ index }));
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

  const handleOnLoad = (index) => {
    setOnLoaded(prevOnLoaded => [...prevOnLoaded, index]);
  }

  return (
    <BoxOfficeContainer>
      {
        pagingData.map((item, index) => {
          return (
            <BoxOfficeItem key={index}>
              <div className="BoxOffice-img_and_Info">
                <img
                  src={item.imageURL}
                  style={{
                    display: onLoaded.includes(index) ? 'block' : "none",
                  }}
                  alt=""
                  onLoad={() => handleOnLoad(index)}
                />
                <div
                  className="BoxOffice-info"
                  onClick={() => handlePopup(index)}
                >
                  <span>{item.infoTitle}</span>
                  {
                    item.info && item.info.split('\n').map((splitItem, index) => {
                      return <span key={index}>{splitItem}</span>
                    })
                  }
                </div>
              </div>
              <div className="BoxOffice-name">
                {item.agelimit === 12 && <img src="../public/images/age/12.png" alt="" />}
                {item.agelimit === 15 && <img src="../public/images/age/15.png" alt="" />}
                {item.agelimit === 18 && <img src="../public/images/age/18.png" alt="" />}
                {item.agelimit === 0 && <img src="../public/images/age/all.png" alt="" />}
                <span >{item.movieNm}</span>
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
            </BoxOfficeItem>
          )
        })
      }
    </BoxOfficeContainer>
  );
};

export default BoxOffice;