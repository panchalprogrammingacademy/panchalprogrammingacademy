import React from 'react';
import {Link} from 'react-router-dom';
export default function ExternalLink(props){
    const {to, id, external, className, onClick} = props;

    return (
        <Link to={to} className={className} id={id}
            onClick={event => {
                if (external) {
                    event.preventDefault();
                    window.open(to, '_blank');
                }
                window.location.href = to;
                if (onClick) onClick(event); 
        }}>
            {props.children}
        </Link>
    );
};