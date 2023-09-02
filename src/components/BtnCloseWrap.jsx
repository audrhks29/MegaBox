import { MdClose } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { isPopupClose } from '../store/modules/stateSlice';
const BtnCloseWrap = () => {
    const dispatch = useDispatch()
    const handlePopup = () => {
        dispatch(isPopupClose())
    }
    return (
        <div className='btnCloseWrap'>
            <i onClick={handlePopup}> <MdClose /></i>
        </div>
    );
};

export default BtnCloseWrap;