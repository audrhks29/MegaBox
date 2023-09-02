import BtnCloseWrap from './BtnCloseWrap';
import PopUpLeft from './PopUpLeft';
import PopUpRight from './PopUpRight';
const PopUp = ({ filteredItems }) => {
    return (
        <div className='popUp'>
            <div className="popUpInner">
                <div className='popUpbg'></div>
                <div className='popUpContent'>
                    <PopUpLeft filteredItems={filteredItems} />
                    <PopUpRight filteredItems={filteredItems} />
                </div>
            </div>
            <BtnCloseWrap />
        </div>
    );
};

export default PopUp;