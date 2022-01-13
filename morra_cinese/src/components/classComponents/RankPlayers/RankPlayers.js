import React, { Component } from 'react';



class RankPlayers extends Component {
    constructor(props) {
        super(props)

        this.array = []
        this.state = {
            arrOfPlayers: [],
        }
    }

    addplayers = () => {
        let points = localStorage.getItem('points');
        let namePlayer = localStorage.getItem('player');
        let player = {

            nome: namePlayer,
            punteggio: points

        }

        this.array.push(player)

    }


    render() {
        return (
            <div>
                CIAO IO SOLO LA CLASSIFICA
            </div>
        )
    }
}

export default RankPlayers;