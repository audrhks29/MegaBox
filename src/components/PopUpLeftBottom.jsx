import { MdDateRange } from 'react-icons/md';
import { BsPeopleFill } from 'react-icons/bs';
const PopUpLeftBottom = ({ filteredMovieData, selectedMovieIndex }) => {
    return (
        <div className='popUpLeft_bottom'>
            <span><strong><i><MdDateRange /></i>개봉일</strong>{filteredMovieData[selectedMovieIndex].openDt}</span>
            <span><strong><i><BsPeopleFill /></i>누적관객수</strong>{filteredMovieData[selectedMovieIndex].audiAcc.toLocaleString('ko-KR')}명</span>
        </div>
    );
};

export default PopUpLeftBottom;