import './List.css';

function ListItem({
    doggyImage,
    dogname,
    dogmodel,
    dogreg,
    dogdist,
    dogfuel
}) {
    return (
        <div className="dogcard">
            <div className="dogitem">
                <img src={doggyImage} alt="DogImage" />
            </div>
            <div className="dogdetails">
                <div className="dogname">{dogname}</div>
                <div className='dogmodel'>{dogmodel}</div>
                <div className="dogbot">{dogreg}</div>
                <div className="dogbot">{dogdist}</div>
                <div className="dogbot">{dogfuel}</div>
            </div>
        </div>
    )
}

export default ListItem;