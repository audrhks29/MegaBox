import PopUpLeft from './PopUpLeft';
import PopUpRight from './PopUpRight';
const PopUpContent = ({ filteredItems, selectedMovieIndex }) => {
    return (
        <div className='popUpContent'>
            <PopUpLeft filteredItems={filteredItems} selectedMovieIndex={selectedMovieIndex} />
            <PopUpRight filteredItems={filteredItems} selectedMovieIndex={selectedMovieIndex} />
        </div>
    );
};

export default PopUpContent;