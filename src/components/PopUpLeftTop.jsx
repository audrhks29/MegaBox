
const PopUpLeftTop = ({ filteredItems, selectedMovieIndex }) => {
    return (
        <div className='popUpLeft_top'>
            <h3>{filteredItems[selectedMovieIndex].movieNm}</h3>
            <strong>{filteredItems[selectedMovieIndex].infoTitle}</strong>
            {
                filteredItems[selectedMovieIndex].info && filteredItems[selectedMovieIndex].info.split('\n').map((splitItem, index) => {
                    return <span key={index}>{splitItem}</span>
                })
            }
        </div>
    );
};

export default PopUpLeftTop;