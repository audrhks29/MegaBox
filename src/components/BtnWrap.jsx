import { useDispatch, useSelector } from 'react-redux';
import { showAllMovie, showEndOnScreen, showFilmOnScreen } from '../store/modules/movieSlice';
import { useEffect } from 'react';
import { goToPage } from '../store/modules/paginationSlice';

const BtnWrap = () => {
    const { movieData, filteredData } = useSelector(state => state.movieR);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(showAllMovie(movieData))
    }, [movieData]);

    const handleShowAllMovie = () => {
        dispatch(showAllMovie(movieData))
        dispatch(goToPage(1))
    }

    const handleFilmOnScreen = () => {
        const filtered = movieData.filter(item => item.screening === String(true))
        dispatch(showFilmOnScreen(filtered))
        dispatch(goToPage(1))
    }

    const handleEndOnScreen = () => {
        const filtered = movieData.filter(item => item.screening === "")
        dispatch(showEndOnScreen(filtered))
        dispatch(goToPage(1))
    }

    return (
        <div className='btnWrap'>
            <button onClick={handleShowAllMovie}>전체</button>
            <button onClick={handleFilmOnScreen}>상영중</button>
            <button onClick={handleEndOnScreen}>상영종료</button>
            <h3>{filteredData.length}개의 영화가 검색되었습니다.</h3>
        </div>
    );
};

export default BtnWrap;