import './RankPlayers.css';

import React, { Component } from 'react';

import utils from '../../../utils/utils';



class RankPlayers extends Component {
    constructor(props) {
        super(props)


        this.state = {
            arrOfPlayers: [],
        }
    }

    componentDidMount() {
        this.getPlayers();
    }

    getPlayers = () => {
        let players = JSON.parse(localStorage.getItem("arrayOfPlayers"))
        let arrayOfPointsOrdered = utils.getValuefromkeyPoints(players)
        let playersOrdered = utils.getPlayersOrdered(players, arrayOfPointsOrdered)

        this.setState({
            arrOfPlayers: playersOrdered
        })

    }


    render() {
        return (
            <div className='box-Rank  start-animation-Rank'>
                <span className='Title-Rank'>Rank Players</span>

                {
                    this.state.arrOfPlayers.map(this.renderPlayers)
                }
            </div>
        )
    }
    renderPlayers = (item, key) => {
        return (
            <div className='box-player' key={key + '_' + key}>
                <span className='player-name'>{item.name}</span>
                <span className='player-points' > {item.points}</span>
            </div>
        )
    }

}

export default RankPlayers;