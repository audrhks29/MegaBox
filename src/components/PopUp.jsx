
import BtnCloseWrap from './BtnCloseWrap';
import PopUpContent from './PopUpContent';
const PopUp = ({ filteredItems, selectedMovieIndex, setIsOpen }) => {
    return (
        <div className='popUp'>
            <div className="popUpInner">
                <div className='popUpbg'></div>
                <PopUpContent filteredItems={filteredItems} selectedMovieIndex={selectedMovieIndex} />
            </div>
            <BtnCloseWrap setIsOpen={setIsOpen} />
        </div>
    );
};

export default PopUp;