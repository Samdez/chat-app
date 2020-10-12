import React from 'react';
import './Contact.css';

const online = true;

const Contact = () => {
    return (
        <div className='Contact'>
            <img className ='avatar' src='https://randomuser.me/api/portraits/women/8.jpg' />
            <div>
                <div className='name'>Amelia Steward</div>
                <div className='status'>
                    <div className='status-online'></div>
                    <div className='status-text'>{online ? 'online' : 'offline'}</div>
                </div>
            </div>
        </div>
    );
}

export default Contact;