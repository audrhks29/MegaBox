
import PopUpLeftBottom from './PopUpLeftBottom';
import PopUpLeftTop from './PopUpLeftTop';
const PopUpLeft = ({ filteredItems, selectedMovieIndex }) => {
    return (
        <div className='popUpLeft'>
            <PopUpLeftTop filteredItems={filteredItems} selectedMovieIndex={selectedMovieIndex} />
            <PopUpLeftBottom filteredItems={filteredItems} selectedMovieIndex={selectedMovieIndex} />
        </div>
    );
};

export default PopUpLeft;