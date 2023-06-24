import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
const Like = ({ item, index, handleLikeToggle, numFormatter }) => {
    const { isLike, audiCnt } = item
    return (
        <div className='like' >
            <button onClick={() => handleLikeToggle(index)}><i>{isLike ? <AiFillHeart /> : <AiOutlineHeart />}<span>{numFormatter(audiCnt)}</span></i></button>
            <button><span>예매하기</span></button>
        </div >
    );
};

export default Like;