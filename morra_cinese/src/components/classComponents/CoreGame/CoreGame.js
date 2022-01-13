import React, { Component } from 'react';


/* utils */
import utils from '../../../utils/utils';



class CoreGame extends Component {
    constructor(props) {
        super(props);

        this.player = {
            name: this.props.namePlayer,
            punteggio: 0,
        }
    }


    /* da qui ci collegheremo a LOgin e CoreGame */
    render() {
        return (
            <div>
                io sono coregame
                {this.props.namePlayer}
            </div>
        )
    }

}
CoreGame.defaultProps = {
    namePlayer: `Player_${utils.getRandomNumber(99, 999)}`
}



export default CoreGame