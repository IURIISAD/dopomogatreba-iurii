import 'bootstrap/dist/css/bootstrap.css';
import '../../index.css'
import AdsCardDropdown from './AdsCardDropdown';

function AdsCard( { props, loading } ) {

    if(loading){
        return <h2>Loading...</h2>
    }

    // console.log(props)
    return (
        <div className="ads-dashboard d-flex flex-column justify-content-start align-items-start">
                {props.map((card) => (
                        <div key={card.id} className="ads__card d-flex flex-row align-items-center">
                            <div className="ads__card__info">
                                <div className="ads__card__image">
                                    <img src={card.image} alt="cardImage" />
                                </div>
                                <div className="ads__card__name">{card.name}</div>
                            </div>
                            <div className="ads__card__date">{card.date}</div>
                            <div className="ads__card__price">{card.price}</div>
                            <div className={card.status ? "ads__card__activity active" : "ads__card__activity expire"}></div>
                            <div className="ads__card__buttons">
                                <button className="ads__card__edit" title="Edit">Edit</button>
                                <AdsCardDropdown props={card.dropdownItems} />
                            </div>
                        </div>
                ))}
            </div>
            )
}

export default AdsCard