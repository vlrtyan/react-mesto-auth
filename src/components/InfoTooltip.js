import success from '../images/success-icon.svg';
import fail from '../images/fail-icon.svg';

function InfoTooltip(props) {
    return (
        <div className={`popup popup_type_tooltip ${props.isOpen ? 'popup_opened' : ''}`}>
            <div className="popup__container">
                <button className="popup__close-button" type="button" onClick={props.onClose}></button>
                <img className="popup_type_tooltip__image" src={success} alt="Назание сайта: Mesto Russia" />
                <h3 className="popup_type_tooltip__text">лалла</h3>
            </div>
        </div>
    )
}

export default InfoTooltip