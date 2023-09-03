import { useDispatch, useSelector } from 'react-redux';
import { showAllMovie, showEndOnScreen, showFilmOnScreen } from '../store/modules/movieSlice';
const { movieData } = useSelector(state => state.movieR);
const dispatch = useDispatch()
const BtnWrap = ({ filteredMovieData }) => {
    const handleShowAllMovie = () => {
        dispatch(showAllMovie())
    }
    const handleFilmOnScreen = () => {
        const filtered = movieData.filter(item => item.screening === true)
        dispatch(showFilmOnScreen(filtered))
    }
    const handleEndOnScreen = () => {
        const filtered = movieData.filter(item => item.screening === false)
        dispatch(showEndOnScreen(filtered))
    }
    return (
        <div className='btnWrap'>
            <button onClick={handleShowAllMovie}>전체</button>
            <button onClick={handleFilmOnScreen}>상영중</button>
            <button onClick={handleEndOnScreen}>상영종료</button>
            <h3>{filteredMovieData.length}개의 영화가 검색되었습니다.</h3>
        </div>
    );
};

export default BtnWrap;