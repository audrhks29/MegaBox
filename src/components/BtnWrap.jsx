
const BtnWrap = ({ showAllMovie, filmOnScreen, endOnScreen, filteredMovieData }) => {
    return (
        <div className='btnWrap'>
            <button onClick={showAllMovie}>전체</button>
            <button onClick={filmOnScreen}>상영중</button>
            <button onClick={endOnScreen}>상영종료</button>
            <h3>{filteredMovieData.length}개의 영화가 검색되었습니다.</h3>
        </div>
    );
};

export default BtnWrap;