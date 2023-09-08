import { MdClose } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { isPopupClose } from '../store/modules/stateSlice';
import { BtnCloseContainer } from '../styled/commonStyle';
const BtnCloseWrap = () => {
    const dispatch = useDispatch()
    const handlePopup = () => {
        dispatch(isPopupClose())
    }
    return (
        <BtnCloseContainer>
            <i onClick={handlePopup}> <MdClose /></i>
        </BtnCloseContainer>
    );
};

export default BtnCloseWrap;