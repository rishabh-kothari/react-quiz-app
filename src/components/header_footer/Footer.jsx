import React from 'react';
import Fade from 'react-reveal/Fade';

const Footer = () => {
    return (
        <footer className="bck_black" style={{ marginTop:'100px' }}>
            <Fade delay={500}>
                <div className="font_righteous footer_logo_venue">Quizzzzy</div>
                <div className="footer_copyright">
                    Made By  {'    '}
                <a href="https://www.linkedin.com/in/rishabh-kothari-4b6248190/" target="_blank" rel="noopener noreferrer">Rishabh Kothari </a>
                    And  {'    '}
                <a href="https://www.linkedin.com/in/praggya-pandey-aa5a19190/" target="_blank" rel="noopener noreferrer">Praggya Pandey</a>
                
                </div>
            </Fade>
        </footer>
    );
};

export default Footer;