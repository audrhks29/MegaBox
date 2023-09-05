import { useSelector } from "react-redux";

const PopUpRight = () => {
    const { pagingData } = useSelector(state => state.movieR);
    const { popupIndex } = useSelector(state => state.stateR.popupState);
    return (
        <div className='popUpRight'>
            <img
                src={pagingData[popupIndex].imageURL}
                style={{ width: 245, height: 350 }}
                alt=""
            />
            <button><span>예매하기</span></button>
        </div>
    );
};

export default PopUpRight;