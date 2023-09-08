
import { MdDateRange } from 'react-icons/md';
import { BsPeopleFill } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { PopupLeftContainer } from '../styled/PopupStyle';
const PopUpLeft = () => {
    const { pagingData } = useSelector(state => state.movieR);
    const { popupIndex } = useSelector(state => state.stateR.popupState);
    return (
        <PopupLeftContainer>
            <div className='popUpLeft_top'>
                <h3>{pagingData[popupIndex].movieNm}</h3>
                <strong>{pagingData[popupIndex].infoTitle}</strong>
                {
                    pagingData[popupIndex].info && pagingData[popupIndex].info.split('\n').map((splitItem, index) => {
                        return <span key={index}>{splitItem}</span>
                    })
                }
            </div>
            <div className='popUpLeft_bottom'>
                <span>
                    <strong><i><MdDateRange /></i>개봉일</strong>
                    {pagingData[popupIndex].openDt}
                </span>
                <span><strong><i><BsPeopleFill /></i>누적관객수</strong>
                    {pagingData[popupIndex].audiAcc.toLocaleString('ko-KR')}명
                </span>
            </div>
        </PopupLeftContainer>
    );
};

export default PopUpLeft;