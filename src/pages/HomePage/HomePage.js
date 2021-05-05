import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './HomePage.css';

export default function HomePage() {
    
    return (
        <div className="container c-home">
           <h1 className="text-center display-1">Dog Book</h1>
           <h3 className="text-center">Woman's Best Friend</h3>
           <Link to="/breeds">
                <Button variant="info" >Woof!</Button>
            </Link>
        </div>
    )
}
