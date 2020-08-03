import React from 'react';
import { Link } from 'react-router-dom';

class HomePage extends React.Component {
    render(){
        return(
            
            <div className="main-bg-container">
                <h1 className="hp-header">We &lt; 3 people who code</h1>
                <p className="hp-header-addition">
                    We build products that empower developers and connect them to solutions that enable productivity, growth, and discovery.
                </p>
            </div>
            
            
        )
    }
}

export default HomePage;