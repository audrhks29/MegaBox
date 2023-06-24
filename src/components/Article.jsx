import BtnWrap from './BtnWrap';
import BoxOffice from './BoxOffice';
import PopUp from './PopUp';
const Article = ({ handleLikeToggle, onChange, showAllMovie, filmOnScreen, endOnScreen, numFormatter, popUpOpen, articleRef, search, filteredMovieData, isOpen, selectedMovieIndex, setIsOpen }) => {
    return (
        <div className="article" ref={articleRef}>
            <h2>박스오피스</h2>
            <input type="text" value={search} onChange={onChange} placeholder='검색어를 입력하세요' />
            <BtnWrap showAllMovie={showAllMovie} filmOnScreen={filmOnScreen} endOnScreen={endOnScreen} filteredMovieData={filteredMovieData} />
            <BoxOffice filteredMovieData={filteredMovieData} popUpOpen={popUpOpen} handleLikeToggle={handleLikeToggle} numFormatter={numFormatter} />
            {
                isOpen && <PopUp filteredMovieData={filteredMovieData} selectedMovieIndex={selectedMovieIndex} setIsOpen={setIsOpen} />
            }
        </div >
    );
};

export default Article;