import PopUpLeft from './PopUpLeft';
import PopUpRight from './PopUpRight';
const PopUpContent = ({ filteredMovieData, selectedMovieIndex }) => {
    return (
        <div className='popUpContent'>
            <PopUpLeft filteredMovieData={filteredMovieData} selectedMovieIndex={selectedMovieIndex} />
            <PopUpRight filteredMovieData={filteredMovieData} selectedMovieIndex={selectedMovieIndex} />
        </div>
    );
};

export default PopUpContent;