import { useDispatch, useSelector } from "react-redux";
import { setInitialState } from '../store/modules/paginationSlice';
import { useEffect } from "react";
const PagingList = () => {
    const dispatch = useDispatch();
    const movieData = useSelector((state) => state.movieR);
    const itemPerPage = 8;
    const lastPage = Math.round(movieData.length / itemPerPage);
    const totalPage = Array.from({ length: lastPage }, (_, index) => index + 1);
    useEffect(() => {
        const initialState = {
            itemPerPage,
            currentPage: 1,
            lastPage,
            totalPage,
        };
        dispatch(setInitialState(initialState));
    }, []);
    const handleGoToPreviousPage = () => {
        dispatch(goToPreviousPage())
    };
    const handleGoToNextPage = () => {
        dispatch(goToNextPage())
    };
    const handleGoToPage = (page) => {
        dispatch(goToPage(page));
    }
    return (
        <div className="pagingList">
            <p onClick={handleGoToPreviousPage}>이전</p>
            {
                totalPage.map((item, index) => {
                    return (
                        <p className={currentPage - 1 === index ? "pagingOn" : ""} key={index} onClick={() => goToClickPage(index + 1)}> {item}</p>
                    )
                })
            }
            <p className="li" onClick={handleGoToNextPage}>다음</p>
        </div >
    );
};

export default PagingList;