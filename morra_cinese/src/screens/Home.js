import React, { Component } from 'react';

/* classComponents */
import CoreGame from '../components/classComponents/CoreGame/CoreGame';
class Home extends Component {
    constructor(props) {
        super(props);

    }

    /* da qui ci collegheremo a LOgin e CoreGame */
    render() {
        return (
            <div>
                <CoreGame />
            </div>
        )
    }

}

export default Home