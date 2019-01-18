import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import styled from 'styled-components';
import Container from './styles/Container';

const SlideImage = styled.img`
    max-width: 150px;
    height: 150px;
    object-fit: cover;
`;

const ActiveSlide = styled.article`
    background: ${props => props.theme.defaultColor};
    padding-top: ${props => props.theme.gutter};
    padding-bottom: ${props => props.theme.gutter};
    border-radius: 5px;

    h3,
    h4 {
        width: 100%;
    }
`;

const FlexContainer = styled.div`
    display: flex;
    flex: 20%;
    justify-content: center;
    align-items: center;
`;

const Button = styled.button`
    padding: 12px 20px;
    background: ${props => props.theme.defaultColor};
`;

class Testimonials extends Component {
    static propTypes = {
        testimonials: PropTypes.arrayOf(
            PropTypes.shape({
                imageUrl: PropTypes.string,
                quote: PropTypes.string,
                author: PropTypes.string,
                affiliate: PropTypes.string,
                logoUrl: PropTypes.string
            })
        )
    };

    state = {
        currentIndex: 0
    };

    setNext = () => {
        const nrSlides = this.props.testimonials;

        if (this.state.currentIndex + 1 === nrSlides) {
            this.setState({ currentIndex: 0 });
            return;
        }

        this.setState({ currentIndex: this.state.currentIndex + 1 });
    };

    setPrev = () => {
        const nrSlides = this.props.testimonials;

        if (this.state.currentIndex === 0) {
            this.setState({ currentIndex: nrSlides - 1 });
            return;
        }

        this.setState({ currentIndex: this.state.currentIndex + 1 });
    };

    setSlideIndex = index => {
        this.setState({ currentIndex: index });
    };

    render() {
        const currentTestimonial = this.props.testimonials[
            this.state.currentIndex
        ];

        return (
            <div>
                <ActiveSlide>
                    <div>
                        <Container center>
                            <SlideImage src={currentTestimonial.imageUrl} />
                            <h3>{currentTestimonial.quote}</h3>
                            <h4>{currentTestimonial.author}</h4>
                        </Container>
                    </div>
                </ActiveSlide>

                <FlexContainer>
                    {this.props.testimonials.map((testimonial, index) => (
                        <Button onClick={() => this.setSlideIndex(index)} />
                    ))}
                </FlexContainer>
            </div>
        );
    }
}

export default Testimonials;
