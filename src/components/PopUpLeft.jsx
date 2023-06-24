
import PopUpLeftBottom from './PopUpLeftBottom';
import PopUpLeftTop from './PopUpLeftTop';
const PopUpLeft = ({ filteredMovieData, selectedMovieIndex }) => {
    return (
        <div className='popUpLeft'>
            <PopUpLeftTop filteredMovieData={filteredMovieData} selectedMovieIndex={selectedMovieIndex} />
            <PopUpLeftBottom filteredMovieData={filteredMovieData} selectedMovieIndex={selectedMovieIndex} />
        </div>
    );
};

export default PopUpLeft;