import React from 'react';
import {FaTimes, FaPen, FaRegCircle} from 'react-icons/fa'
import {GrStatusPlaceholderSmall} from 'react-icons/gr'
const Icon = ({name}) => {
    
        switch (name) {
            case 'circle':
                return (<FaRegCircle className="icon"/>);
            case 'cross':
                return (<FaTimes className="icon"/>);
        
            default:
                return (<GrStatusPlaceholderSmall className="icon" />);
        }
    
}

export default Icon;