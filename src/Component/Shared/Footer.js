import React from 'react';

const Footer = () => {
    const date= new Date()
    const year=date.getFullYear()
    return (
        <footer className='text-center'>
            <p><small>copy right &#169; {year} </small></p>
        </footer>
    );
};

export default Footer;