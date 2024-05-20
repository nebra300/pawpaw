import './TopImages.css';
import doggybag from '../../images/doggybag.png';
import doghuman from '../../images/doghuman.png';

function TopImages() {
    return (
        <div className="TopImages">
            <img src={doghuman} alt='human'/>
            <img src={doggybag} alt='bag'/>
        </div>
    )
}

export default TopImages;