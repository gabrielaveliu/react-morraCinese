import './Button.css'
import PropTypes from 'prop-types'



const Button = (props) => {

    
    return (
        <>
            <button className={`button_tag ${props.specialClass}`}
                onClick={props.onClick}>
                {props.label}
            </button>
        </>
    );
}
Button.propTypes = {
    label: PropTypes.string.isRequired,
    specialClass: PropTypes.string,
    onClick: PropTypes.func,
}

Button.defaultProps = {
    label: "PRESS ME",
};

export default Button;