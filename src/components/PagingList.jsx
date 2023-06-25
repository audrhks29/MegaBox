
const PagingList = ({ goToPreviousPage, totalPage, goToClickPage, goToNextPage, currentPage }) => {
    return (
        <div className="pagingList">
            <p onClick={goToPreviousPage}>이전</p>
            {
                totalPage.map((item, index) => {
                    return (
                        <p className={currentPage - 1 === index ? "pagingOn" : ""} key={index} onClick={() => goToClickPage(index + 1)}> {item}</p>
                    )
                })
            }
            <p className="li" onClick={goToNextPage}>다음</p>
        </div >
    );
};

export default PagingList;