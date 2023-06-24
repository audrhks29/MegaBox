
const PopUpLeftTop = ({ filteredMovieData, selectedMovieIndex }) => {
    return (
        <div className='popUpLeft_top'>
            <h3>{filteredMovieData[selectedMovieIndex].movieNm}</h3>
            <strong>{filteredMovieData[selectedMovieIndex].infoTitle}</strong>
            {
                filteredMovieData[selectedMovieIndex].info && filteredMovieData[selectedMovieIndex].info.split('\n').map((splitItem, index) => {
                    return <span key={index}>{splitItem}</span>
                })
            }
        </div>
    );
};

export default PopUpLeftTop;