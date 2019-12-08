import React from 'react';
import { Navbar} from 'react-bootstrap'

const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand as="span">
                <img src="/spacex.png" alt="Space X" height="60"/>
            </Navbar.Brand>
        </Navbar>
    )
};

export default Header;