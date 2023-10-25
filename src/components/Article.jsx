import BtnWrap from './BtnWrap';
import BoxOffice from './BoxOffice';
import PopUp from './PopUp';
import PagingList from './PagingList';
import { useDispatch, useSelector } from 'react-redux';
import { onChangeKeyword } from '../store/modules/searchSlice';
import { showSearchedResults } from '../store/modules/movieSlice';
import { ArticleContainer } from '../styled/ArticleStyle';
const Article = () => {
    const { state } = useSelector(state => state.stateR.popupState);
    const { movieData } = useSelector(state => state.movieR);
    const { keywords } = useSelector(state => state.searchR);
    const dispatch = useDispatch()

    const onChange = (e) => {
        const inputValue = e.target.value;
        dispatch(onChangeKeyword(inputValue));
        const searched = movieData.filter(item => item.movieNm.includes(inputValue))
        dispatch(showSearchedResults(searched));
    };

    return (
        <ArticleContainer>
            <h2>박스오피스</h2>
            <input
                type="text"
                value={keywords}
                onChange={onChange}
                placeholder='검색어를 입력하세요'
            />
            <BtnWrap />
            <BoxOffice />
            {
                state && <PopUp />
            }
            <PagingList />
        </ArticleContainer >
    );
};

export default Article;