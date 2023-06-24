const BoxOfficeImg = ({ item }) => {
    const { imageURL } = item;
    return (
        <div className="BoxOffice-img">
            <img src={imageURL} style={{ width: 245, height: 350 }} alt="" />
        </div>
    );
};

export default BoxOfficeImg;