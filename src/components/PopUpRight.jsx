import { useSelector } from "react-redux";
import { PopupRightContainer } from "../styled/PopupStyle";

const PopUpRight = () => {
    const { pagingData } = useSelector(state => state.movieR);
    const { popupIndex } = useSelector(state => state.stateR.popupState);
    return (
        <PopupRightContainer>
            <img
                src={pagingData[popupIndex].imageURL}
                style={{ width: 245, height: 350 }}
                alt=""
            />
            <button><span>예매하기</span></button>
        </PopupRightContainer>
    );
};

export default PopUpRight;