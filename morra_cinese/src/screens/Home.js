import React, { Component } from 'react';

/* classComponents */
import CoreGame from '../components/classComponents/CoreGame/CoreGame';
import RankPlayers from '../components/classComponents/RankPlayers/RankPlayers';


class Home extends Component {
    constructor(props) {
        super(props);


        this.points = null
        this.state = {
            flagShowRank: false
        }
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

            <div>
                {
                    this.state.flagShowRank === false &&
                    <CoreGame />
                }

                <button onClick={this.methToShowRank}>TERMINA PARTITA</button>
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