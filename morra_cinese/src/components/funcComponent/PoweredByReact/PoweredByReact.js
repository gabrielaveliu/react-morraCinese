import './PoweredByReact.css';

import logo from '../../../assets/img/logo.svg'


const PoweredByReact = () => {
    return (
        <div className='PoweredByReact-container'>
            <span className='PoweredByReact-text'> PoweredByReact</span>
            <div className='PoweredByReact-cover-image'>
                <img src={logo} alt='react-logo' />
            </div>
        </div>
    )
}
export default PoweredByReact