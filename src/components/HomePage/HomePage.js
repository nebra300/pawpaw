import './HomePage.css';
import TopImages from '../TopImages/TopImages.js';
import LookingFor from '../LookingFor/LookingFor.js'

function HomePage() {
    return (
        <div className="Home">
            <TopImages />
            <LookingFor />
        </div>
    )
}

export default HomePage;