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

        //this.arr = players
        console.log(this.arr)
    }



    render() {
        return (
            <div>
                CIAO IO SOLO LA CLASSIFICA
                {
                    this.state.arrOfPlayers.length > 0 &&
                    this.state.arrOfPlayers[0]?.name
                }
            </div>
        )
    }
}

export default RankPlayers;