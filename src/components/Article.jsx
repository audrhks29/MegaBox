import BtnWrap from './BtnWrap';
import BoxOffice from './BoxOffice';
import PopUp from './PopUp';
import PagingList from './PagingList';
const Article = ({ handleLikeToggle, onChange, showAllMovie, filmOnScreen, endOnScreen, numFormatter, popUpOpen, articleRef, search, filteredMovieData, isOpen, selectedMovieIndex, setIsOpen, filteredItems, goToPreviousPage, totalPage, goToClickPage, goToNextPage, currentPage }) => {
    return (
        <div className="article" ref={articleRef}>
            <h2>박스오피스</h2>
            <input type="text" value={search} onChange={onChange} placeholder='검색어를 입력하세요' />
            <BtnWrap showAllMovie={showAllMovie} filmOnScreen={filmOnScreen} endOnScreen={endOnScreen} filteredMovieData={filteredMovieData} />
            <BoxOffice filteredMovieData={filteredMovieData} popUpOpen={popUpOpen} handleLikeToggle={handleLikeToggle} numFormatter={numFormatter} filteredItems={filteredItems} />
            {
                isOpen && <PopUp filteredItems={filteredItems} selectedMovieIndex={selectedMovieIndex} setIsOpen={setIsOpen} />
            }
            <PagingList goToPreviousPage={goToPreviousPage} totalPage={totalPage} goToClickPage={goToClickPage} goToNextPage={goToNextPage} currentPage={currentPage} />
        </div >
    );
};

export default Article;