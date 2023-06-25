
const PopUpRight = ({ filteredItems, selectedMovieIndex }) => {
    return (
        <div className='popUpRight'>
            <img src={filteredItems[selectedMovieIndex].imageURL} style={{ width: 245, height: 350 }} alt="" />
            <button><span>예매하기</span></button>
        </div>
    );
};

export default PopUpRight;