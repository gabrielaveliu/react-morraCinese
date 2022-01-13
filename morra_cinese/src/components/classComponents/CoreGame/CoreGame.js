import React, { Component } from 'react';


/* utils */
import utils from '../../../utils/utils';
import CardSelection from '../../funcComponent/CardSelection';



class CoreGame extends Component {
    constructor(props) {
        super(props);

        this.assetGame = ['forbici', 'carta', 'sasso']

        this.state = {
            player: {
                name: this.props.namePlayer,
                punteggio: 0,
            }
        }
    }

    /* forbici vince su carta, perde su sasso */
    match = (typeCard) => {
        let pcChoice = this.assetGame[utils.getRandomNumber(0, 2)];
        let flagCase = null;
        //player wins
        if ((typeCard === this.assetGame[0] && pcChoice === this.assetGame[1])
            || (typeCard === this.assetGame[1] && pcChoice === this.assetGame[2])
            || (typeCard === this.assetGame[2] && pcChoice === this.assetGame[0])) {
            flagCase = true
            console.log('hai vinto', pcChoice, flagCase)

            //tie
        } else if ((typeCard === this.assetGame[0] && pcChoice === this.assetGame[0])
            || (typeCard === this.assetGame[1] && pcChoice === this.assetGame[1])
            || (typeCard === this.assetGame[2] && pcChoice === this.assetGame[2])) {
            flagCase = false
            console.log('hai pareggiato', pcChoice, flagCase)


            //player loses
        } else if ((pcChoice === this.assetGame[0] && typeCard === this.assetGame[1])
            || (pcChoice === this.assetGame[1] && typeCard === this.assetGame[2])
            || (pcChoice === this.assetGame[2] && typeCard === this.assetGame[0])) {
            flagCase = false
            console.log('hai perso', pcChoice, flagCase)
        }
        if (flagCase) {
            this.setState({

                player: {
                    punteggio: this.state.player.punteggio+1
                }

            })
        }

    }


    /* da qui ci collegheremo a Login e CoreGame */
    render() {
        return (
            <div>
                io sono coregame
                {this.props.namePlayer}
                <CardSelection
                    callback={this.match}
                    typeCard='sasso'
                />
                <CardSelection
                    callback={this.match}
                    typeCard='carta'
                />
                <CardSelection
                    callback={this.match}
                    typeCard='forbici'
                />
                {
                    this.state.player.punteggio
                }
            </div>
        )
    }

}
CoreGame.defaultProps = {
    namePlayer: `Player_${utils.getRandomNumber(99, 999)}`
}



export default CoreGame