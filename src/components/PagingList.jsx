import { useDispatch, useSelector } from "react-redux";
import { goToNextPage, goToPage, goToPreviousPage, setInitialState } from '../store/modules/paginationSlice';
import { useEffect, useState } from "react";
import { setPagingData } from "../store/modules/movieSlice";
const PagingList = () => {
    const { currentPage, itemPerPage } = useSelector(state => state.paginationR);
    const dispatch = useDispatch();
    const { movieData, filteredData } = useSelector(state => state.movieR);
    const [lastPage, setLastPage] = useState()
    const [totalPage, setTotalPage] = useState([])
    useEffect(() => {
        setLastPage(Math.ceil(filteredData.length / itemPerPage));
        setTotalPage(Array.from({ length: lastPage }, (_, index) => index + 1));
    }, [movieData, currentPage, itemPerPage, lastPage, filteredData]);
    useEffect(() => {
        const filter = filteredData.slice((currentPage - 1) * itemPerPage, itemPerPage * currentPage);
        dispatch(setPagingData(filter))
    }, [movieData, currentPage, itemPerPage, lastPage, totalPage]);
    useEffect(() => {
        const initialState = {
            currentPage,
            lastPage,
            totalPage,
        };
        dispatch(setInitialState(initialState));
    }, [movieData]);
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
                        <p className={currentPage - 1 === index ? "pagingOn" : ""} key={index} onClick={() => handleGoToPage(index + 1)}> {item}</p>
                    )
                })
            }
            <p className="li" onClick={handleGoToNextPage}>다음</p>
        </div >
    );
};

export default PagingList;