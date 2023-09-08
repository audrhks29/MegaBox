import { PopupBg, PopupContainer, PopupContent, PopupInner } from '../styled/PopupStyle';
import BtnCloseWrap from './BtnCloseWrap';
import PopUpLeft from './PopUpLeft';
import PopUpRight from './PopUpRight';
const PopUp = () => {
    return (
        <PopupContainer>
            <PopupInner>
                <PopupBg></PopupBg>
                <PopupContent>
                    <PopUpLeft />
                    <PopUpRight />
                </PopupContent>
            </PopupInner>
            <BtnCloseWrap />
        </PopupContainer>
    );
};

export default PopUp;