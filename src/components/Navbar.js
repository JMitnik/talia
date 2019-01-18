import React from 'react';
import { Link } from 'gatsby';
import logo from '../img/logo-2.svg';
import Container from './styles/Container';
import styled from 'styled-components';

const Nav = styled.nav`
    justify-content: space-between;
    font-family: ${props => props.theme.mainFont};
    padding: 10px 0;
    color: ${props => props.theme.bodyTextColor};
    align-items: center;
`;

const NavItems = styled.div`
    a {
        padding: ${props => props.theme.gutterSm};
        color: inherit;
        text-decoration: none;

        &:hover {
            border-bottom: 2px solid ${props => props.theme.primaryColor};
        }
    }
`;

const PageBorder = styled.div`
    background: ${props => props.theme.gradients.primary};
    height: 5px;
`;

const Navbar = class extends React.Component {
    setNavBurger = () => {
        // Get all "navbar-burger" elements
        const $navbarBurgers = Array.prototype.slice.call(
            document.querySelectorAll('.navbar-burger'),
            0
        );
        // Check if there are any navbar burgers
        if ($navbarBurgers.length > 0) {
            // Add a click event on each of them
            $navbarBurgers.forEach(el => {
                el.addEventListener('click', () => {
                    // Get the target from the "data-target" attribute
                    const target = el.dataset.target;
                    const $target = document.getElementById(target);

                    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
                    el.classList.toggle('is-active');
                    $target.classList.toggle('is-active');
                });
            });
        }
    };

    componentDidMount() {
        this.setNavBurger();
    }

    render() {
        return (
            <div>
                <PageBorder />
                <Container
                    as={Nav}
                    role='navigation'
                    aria-label='main-navigation'
                >
                    <div className='navbar-brand'>
                        <Link to='/' className='navbar-item' title='Logo'>
                            <img
                                src={logo}
                                alt='Kaldi'
                                style={{ width: '175px' }}
                            />
                        </Link>
                        {/* Hamburger menu */}
                        <div
                            className='navbar-burger burger'
                            data-target='navMenu'
                        >
                            <span />
                            <span />
                            <span />
                        </div>
                    </div>
                    <div>
                        <NavItems>
                            <Link className='navbar-item' to='/about'>
                                About
                            </Link>
                            <Link className='navbar-item' to='/products'>
                                Products
                            </Link>
                            <Link className='navbar-item' to='/contact'>
                                Contact
                            </Link>
                            <Link
                                className='navbar-item'
                                to='/contact/examples'
                            >
                                Form Examples
                            </Link>
                        </NavItems>
                    </div>
                </Container>
            </div>
        );
    }
};

export default Navbar;
