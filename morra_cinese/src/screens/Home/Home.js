import React, { Component } from 'react';
import './home.css'

/* classComponents */
import CoreGame from '../../components/classComponents/CoreGame/CoreGame';
import RankPlayers from '../../components/classComponents/RankPlayers/RankPlayers';
/* func Components */
import Login from '../../components/classComponents/Login/Login';
import Button from '../../components/funcComponent/Button/Button';
import PoweredByReact from '../../components/funcComponent/PoweredByReact/PoweredByReact';


class Home extends Component {
    constructor(props) {
        super(props);


        this.valueInputLogin = null;
        this.state = {
            players: [],
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
            players: localStorage.getItem("arrayOfPlayers"),
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

            <div className='container-home'>
                <PoweredByReact />

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
                    this.state.players?.length > 0 &&
                    <div className='box-buttonEndGame'>
                        <Button
                            onClick={this.methToShowRank}
                            label='Termina Partita'
                            specialClass='buttonEndGame'
                        />
                    </div>
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