import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/Footer.css'
class Footer extends React.Component{
    render(){
        return(
            <div className="container">
                <hr />
                <div className="text-center credit">
                    Made with 💝 by <a href="http://github.com/snowbit-coderboi" target="_blank" rel="noopener noreferrer" className="text-dark text-decoration-none fw-bold credit-text">SnowBit</a>
                </div>
            </div>
        )
    }
}

export default Footer;