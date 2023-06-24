
import BoxOfficeName from './BoxOfficeName';
import BoxOfficeImg from './BoxOfficeImg';
import BoxOfficeInfo from './BoxOfficeInfo';
import BoxOfficePerDate from './BoxOfficePerDate';
import Like from './like';
const BoxOffice = ({ filteredMovieData, popUpOpen, handleLikeToggle, numFormatter }) => {
    return (
        <div className="BoxOffice" >
            {
                filteredMovieData.map((item, index) => {
                    return (
                        <div key={index} className="BoxOffice-item">
                            <BoxOfficeImg item={item} />
                            <BoxOfficeName item={item} />
                            <BoxOfficeInfo item={item} index={index} popUpOpen={popUpOpen} />
                            <BoxOfficePerDate item={item} />
                            <Like item={item} index={index} handleLikeToggle={handleLikeToggle} numFormatter={numFormatter} />
                        </div>
                    )
                })
            }
        </div>

    );
};

export default BoxOffice;