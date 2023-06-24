
const BoxOfficeInfo = ({ popUpOpen, item, index }) => {
    const { infoTitle, info } = item
    return (
        <div className="BoxOffice-info" onClick={() => popUpOpen(index)}>
            <span>{infoTitle}</span>
            {
                info && info.split('\n').map((splitItem, index) => {
                    return <span key={index}>{splitItem}</span>
                })
            }
        </div>
    );
};

export default BoxOfficeInfo;