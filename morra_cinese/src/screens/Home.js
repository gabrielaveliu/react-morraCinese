import React, { Component } from 'react';
import './home.css'

/* classComponents */
import CoreGame from '../components/classComponents/CoreGame/CoreGame';
import RankPlayers from '../components/classComponents/RankPlayers/RankPlayers';
import Login from '../components/classComponents/Login/Login';

class Home extends Component {
    constructor(props) {
        super(props);


        this.valueInputLogin = null;
        this.state = {
            flagShowRank: false,
            flagShowLogin: true,
        }
    }
    /* metodi di visualizzazione */
    methToShowLogin = (boolean, string) => {
        let resultbool = null
        if (string === undefined) {
            resultbool = boolean
        } else {
            resultbool = boolean
            this.valueInputLogin = string
        }
        this.setState({
            flagShowLogin: resultbool,
        })
    }
    methToShowRank = () => {
        let result = null
        if (this.state.flagShowRank) {
            result = false
        } else {
            result = true
        }
        this.setState({
            flagShowRank: result,
        })
    }



    /* da qui ci collegheremo a LOgin e CoreGame */
    render() {
        return (

            <div className='container'>
                {
                    this.state.flagShowLogin &&
                    <Login
                        callback={this.methToShowLogin}
                    />
                }


                {
                    this.state.flagShowRank === false &&
                    this.state.flagShowLogin === false &&
                    this.valueInputLogin !== null &&
                    < CoreGame
                        namePlayer={this.valueInputLogin}
                        class="coreGameBox"
                    />
                }
                {
                    this.state.flagShowRank === false &&
                    this.state.flagShowLogin === false &&
                    this.valueInputLogin === null &&
                    < CoreGame
                        className="coreGameBox"
                    />
                }
                {
                    this.state.flagShowRank === false &&
                    this.state.flagShowLogin === false &&
                    <button
                        onClick={this.methToShowRank}
                        className="buttonEndGame"
                    >TERMINA PARTITA</button>
                }

                {
                    this.state.flagShowRank &&
                    <RankPlayers

                    />
                }
            </div>
        )
    }

}

export default Home