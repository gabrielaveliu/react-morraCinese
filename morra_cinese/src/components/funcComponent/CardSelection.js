import PropTypes from "prop-types";


const CardSelection = (props) => {

    const handleClick = () => {
        console.log(props.typeCard)
        if (props.callback !== undefined)
            props.callback(props.typeCard)
    }

    return (
        <div
            className="coverCard"
            onClick={handleClick}

        >
            {
                props.typeCard
            }
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

export default CardSelection;