import { MdClose, } from 'react-icons/md';
const BtnCloseWrap = ({ setIsOpen }) => {
    return (
        <div className='btnCloseWrap'>
            <i onClick={() => setIsOpen(false)}> <MdClose /></i>
        </div>
    );
};

export default BtnCloseWrap;