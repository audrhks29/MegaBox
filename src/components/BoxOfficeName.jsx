
const BoxOfficeName = ({ item }) => {
    const { agelimit, movieNm } = item;
    return (
        <div className="BoxOffice-name">
            <img src={agelimit} alt="" />
            <span >{movieNm}</span>
        </div>
    );
};

export default BoxOfficeName;