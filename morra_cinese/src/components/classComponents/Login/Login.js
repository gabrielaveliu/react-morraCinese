import "./Login.css"

import React, { Component } from 'react';
import PropTypes from 'prop-types'

/* componets func */
import Button from "../../funcComponent/Button/Button";

class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            animationClassLogin: ""
        }
        this.valueInput = ""
    }
    setAnimation = () => {
        this.setState({
            animationClassLogin: "hiding_tab_login"
        })
    }

    handlerChangeInput = (e) => {
        this.valueInput = e.target.value;
    }
    handlerClicklogin = () => {
        if (this.valueInput.length > 0) {
            this.setAnimation()

            setInterval(() => {
                if (this.props.callback !== undefined) {
                    this.props.callback(false, this.valueInput)
                }
            }, 400);
        }
    }
    handlerClickAnonimus = () => {
        this.setAnimation()

        setInterval(() => {
            if (this.props.callback !== undefined) {
                this.props.callback(false)

            }
        }, 400);
    }

    render() {
        return (
            <div className='container_login'>
                <div className={`box_login  startBoxLog ${this.state.animationClassLogin}`}>
                    <div className='box_inputs'>
                        <div className="login_input_tag">
                            <input placeholder="NickName" onChange={this.handlerChangeInput} type={"text"}></input>
                        </div>
                        <div className={"login_loginbutton_tag"}>
                            <Button
                                onClick={this.handlerClicklogin}
                                label="fai login"
                                specialClass="button_log"
                            />
                        </div>
                        <div className={"login_anonimusbutton_tag"}>
                            <Button
                                onClick={this.handlerClickAnonimus}
                                label="accedi in anonimo"
                                specialClass="button_anonimus"
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
Login.propTypes = {
    callback: PropTypes.func.isRequired
}
export default Login