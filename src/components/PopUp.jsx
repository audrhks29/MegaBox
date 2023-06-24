
import BtnCloseWrap from './BtnCloseWrap';
import PopUpContent from './PopUpContent';
const PopUp = ({ filteredMovieData, selectedMovieIndex, setIsOpen }) => {
    return (
        <div className='popUp'>
            <div className="popUpInner">
                <div className='popUpbg'></div>
                <PopUpContent filteredMovieData={filteredMovieData} selectedMovieIndex={selectedMovieIndex} />
            </div>
            <BtnCloseWrap setIsOpen={setIsOpen} />
        </div>
    );
};

export default PopUp;