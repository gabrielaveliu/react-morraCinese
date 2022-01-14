import PropTypes from "prop-types";


const CardSelection = (props) => {

    const handleClick = () => {
        console.log(props.typeCard)
        if (props.callback !== undefined)
            props.callback(props.typeCard)
    }

    return (
        <div
            className={props.class}
            onClick={handleClick}
            typeCard={props.typeCard}
        >
            
            <img >
            </img>

        </div>
    )


}
CardSelection.propTypes = {
    callback: PropTypes.func,
    class: PropTypes.string,
    typeCard: PropTypes.string
}
CardSelection.defaultProps = {
    class: "coverCard"
}

export default CardSelection;