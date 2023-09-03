// import BtnWrap from './BtnWrap';
import BoxOffice from './BoxOffice';
import PopUp from './PopUp';
import PagingList from './PagingList';
import { useDispatch, useSelector } from 'react-redux';
import { onChangeKeyword } from '../store/modules/searchSlice';
import { showSearchedResults } from '../store/modules/movieSlice';
const Article = ({ handleLikeToggle, numFormatter, articleRef, search, filteredMovieData, filteredItems, }) => {
    const { state } = useSelector(state => state.stateR.popupState);
    const { movieData } = useSelector(state => state.movieR);
    const dispatch = useDispatch()
    const onChange = (e) => {
        const inputValue = e.target.value;
        dispatch(onChangeKeyword(inputValue));
        const searched = movieData.filter(item => item.movieNm.includes(inputValue))
        dispatch(showSearchedResults(searched));
    };
    return (
        <div className="article" ref={articleRef}>
            <h2>박스오피스</h2>
            <input type="text" value={search} onChange={onChange} placeholder='검색어를 입력하세요' />
            {/* <BtnWrap filteredMovieData={filteredMovieData} /> */}
            <BoxOffice filteredMovieData={filteredMovieData} handleLikeToggle={handleLikeToggle} numFormatter={numFormatter} filteredItems={filteredItems} />
            {
                state && <PopUp filteredItems={filteredItems} />
            }
            <PagingList />
        </div >
    );
};

export default Article;