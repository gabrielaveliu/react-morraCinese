import React, { Component } from 'react';
import PropTypes from 'prop-types'



class Login extends Component {
    constructor(props) {
        super(props)

        this.valueInput = ""
    }

    handlerChangeInput = (e) => {
        this.valueInput = e.target.value;
    }
    handlerClicklogin = () => {
        if (this.props.callback !== undefined && this.valueInput.length > 0) {
            this.props.callback(false, this.valueInput)
        }
    }
    handlerClickAnonimus = () => {
        if (this.props.callback !== undefined) {
            this.props.callback(false)

        }
    }


    render() {
        return (
            <div className='container_login'>
                <input onChange={this.handlerChangeInput} type={"text"}></input>
                <button onClick={this.handlerClicklogin}> fai login</button>
                <button onClick={this.handlerClickAnonimus}>accedi in anonimo</button>
            </div>
        )
    }
}
Login.propTypes = {
    callback: PropTypes.func.isRequired
}
export default Login