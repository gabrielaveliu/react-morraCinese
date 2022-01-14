import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './CoreGame.css'

/* utils */
import utils from '../../../utils/utils';
import CardSelection from '../../funcComponent/CardSelection';
import Button from '../../funcComponent/Button/Button';

class CoreGame extends Component {
    constructor(props) {
        super(props);

        this.assetGame = ['forbici', 'carta', 'sasso']
        this.arrOfPlayers = []

        this.state = {
            player: {
                name: this.props.namePlayer,
                points: 0,
            }
        }

    }

    /* chiamata per salvare i player */
    savePlayer = () => {
        //prende valore dell'array e lo salva in existingPlayers come oggetto JSON
        let existingPlayers = JSON.parse(localStorage.getItem("arrayOfPlayers"));

        //copia tutti gli elementi di existingPlayers(key,value) in arrOfPlayers
        //non permette di azzerare l'array ad ogni azione 
        Object.assign(this.arrOfPlayers, existingPlayers);
        this.arrOfPlayers.push(this.state.player)
        localStorage.setItem("arrayOfPlayers", JSON.stringify(this.arrOfPlayers));
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
                    points: this.state.player.points + 1,
                    name: this.props.namePlayer
                }
            })
        }

    }


    /* da qui ci collegheremo a Login e CoreGame */
    render() {
        return (
            <div className="containerCoregame">
                <div className='containerWithoutButton'>
                    <div className='playerBox'>
                        <div className='userBox'>
                            <div className="user"></div>
                            <div className="namePlayerCoregame">
                                {this.props.namePlayer}
                            </div>
                        </div>

                        <div className='cardBox'>
                            <CardSelection
                                class="cardSasso"
                                callback={this.match}
                                typeCard='sasso'
                            />
                            <CardSelection
                                class="cardCarta"
                                callback={this.match}
                                typeCard='carta'
                            />
                            <CardSelection
                                class="cardForbici"
                                callback={this.match}
                                typeCard='forbici'
                            />
                        </div>
                        <div className='playerPoints'>
                            {
                                this.state.player.points
                            }
                        </div>
                    </div>

                    <div className='pcChoiceBox'>
                      <div className='pcImg'>
                    </div>  
                    <p className='pc'>PC</p>
                    </div>
                    
                </div>
                <Button
                    specialClass='registramiButton'
                    onClick={this.savePlayer}
                    label="REGISTRAMI"
                ></Button>


            </div>

        )
    }

}
CoreGame.propTypes = {
    namePlayer: PropTypes.string,

}
CoreGame.defaultProps = {
    namePlayer: `Player_${utils.getRandomNumber(99, 999)}`,
}



export default CoreGame