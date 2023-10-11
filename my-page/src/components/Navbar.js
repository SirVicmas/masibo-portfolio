import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { FaLinkedin, FaFacebook, FaInstagram, FaBars } from 'react-icons/fa';

export const NavBar = () => {

    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else{
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);

    }, [])

    const onUpdateActivelink = (value) => {
        setActiveLink(value);
    }


    return (
            <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
              <Container>
                <Navbar.Brand href="#home">
                <a href="#"><FaBars /></a>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActivelink('home')}>Home</Nav.Link>
                    <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActivelink('skills')}>Skills</Nav.Link>
                    <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActivelink('projects')}>Projects</Nav.Link>
                  </Nav>
                  <span className="navbar-text">
                    <div className="social-icon">
                            <a href="#"><FaLinkedin /></a>
                            <a href="#"><FaFacebook /></a>
                            <a href="#"><FaInstagram /></a>
                    </div>
                    <button className="vvd" onClick={() => console.log('connect')}><span>Let's Connect</span></button>
                  </span>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          );
         
}