import { AiOutlineHeart } from 'react-icons/ai';

import { BoxOfficeSkeletonContainer, BoxOfficeSkeletonItem } from '../styled/SkeletonStyle';


const BoxOfficeSkeleton = () => {
  const previewArr = Array.from(Array(8), (_, index) => ({ id: index + 1 }));

  return (
    <BoxOfficeSkeletonContainer>
      {
        previewArr.map(index => {
          return (
            <BoxOfficeSkeletonItem key={index}>
              <div className="skeleton-boxOffice-img"></div>
              <div className="skeleton-boxOffice-name"></div>
              <div className='skeleton-boxOffice-per_date'></div>
              <div className='like' >
                <button>
                  <i><AiOutlineHeart /></i>
                  <span>000</span>
                </button>
                <button><span>예매하기</span></button>
              </div >
            </BoxOfficeSkeletonItem>
          )
        })
      }
    </BoxOfficeSkeletonContainer>
  );
};

export default BoxOfficeSkeleton;