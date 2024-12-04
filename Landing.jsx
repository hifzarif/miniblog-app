import React from 'react'
import Navigation from '../components/Navigation'
import Container from 'react-bootstrap/esm/Container'
import './Landing.css';


function Landing(){
    return(
        <div>
            <Navigation />
            <Container fluid className="bg bg-primary landing_wrapper">
                <h1 className="text-light ">Hey There!</h1></Container> 
</div>
    )
}

export default Landing