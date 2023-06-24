
const BoxOfficePerDate = ({ item }) => {
    const { salesShare, openDt } = item
    return (
        <div className='BoxOffice-per_date'>
            <span><strong>예매율 </strong>{salesShare}%</span>
            <span><strong>개봉일 </strong>{openDt}</span>
        </div>
    );
};

export default BoxOfficePerDate;