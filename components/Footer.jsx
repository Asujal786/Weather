import React from 'react';

function Footer(props) {

    const date= new Date();
    const year=date.getFullYear();
    return (
        <div className='fll'>
            
            <p id="footer"> <strong>Bloom Weather</strong> © {year} All Right Reserved. </p>
        </div>
    );
}

export default Footer;