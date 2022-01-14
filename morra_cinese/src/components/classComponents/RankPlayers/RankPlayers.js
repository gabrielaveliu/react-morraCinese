import React, { Component } from 'react';



class RankPlayers extends Component {
    constructor(props) {
        super(props)
        this.arr = []
        this.state = {
            arrOfPlayers: [],
        }
    }

    componentDidMount() {
        this.getPlayers();
    }

    getPlayers = () => {
        let players = JSON.parse(localStorage.getItem("arrayOfPlayers"))

        this.setState({
            arrOfPlayers: players
        })

    }

    getRank = () => {
        this.arr = this.state.arrOfPlayers
    
    }



    render() {
        return (
            <div>
                CIAO IO SOLO LA CLASSIFICA
                
                {
                    this.state.arrOfPlayers.map(this.renderPlayers)
                }

            </div>
        )
    }

    renderPlayers = (player, id) => {
        
        return (
            <div key={player + '_' + id}>
               {player.name + '_' + player.points}
            </div>
        )
    }
   
}

export default RankPlayers;