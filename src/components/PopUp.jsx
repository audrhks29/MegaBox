import BtnCloseWrap from './BtnCloseWrap';
import PopUpLeft from './PopUpLeft';
import PopUpRight from './PopUpRight';
const PopUp = () => {
    return (
        <div className='popUp'>
            <div className="popUpInner">
                <div className='popUpbg'></div>
                <div className='popUpContent'>
                    <PopUpLeft />
                    <PopUpRight />
                </div>
            </div>
            <BtnCloseWrap />
        </div>
    );
};

export default PopUp;