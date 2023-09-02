
import { MdDateRange } from 'react-icons/md';
import { BsPeopleFill } from 'react-icons/bs';
import { useSelector } from 'react-redux';
const PopUpLeft = ({ filteredItems }) => {
    const { popupIndex } = useSelector(state => state.stateR.popupState);
    return (
        <div className='popUpLeft'>
            <div className='popUpLeft_top'>
                <h3>{filteredItems[popupIndex].movieNm}</h3>
                <strong>{filteredItems[popupIndex].infoTitle}</strong>
                {
                    filteredItems[popupIndex].info && filteredItems[popupIndex].info.split('\n').map((splitItem, index) => {
                        return <span key={index}>{splitItem}</span>
                    })
                }
            </div>
            <div className='popUpLeft_bottom'>
                <span><strong><i><MdDateRange /></i>개봉일</strong>{filteredItems[popupIndex].openDt}</span>
                <span><strong><i><BsPeopleFill /></i>누적관객수</strong>{filteredItems[popupIndex].audiAcc.toLocaleString('ko-KR')}명</span>
            </div>
        </div>
    );
};

export default PopUpLeft;