import React, { Component } from 'react';
import propTypes from 'prop-types';
import v4 from 'uuid';

class Portfolio extends Component {
    static propTypes = {
        portfolioCollection: propTypes.array
    };

    render() {
        console.log(this.props.portfolioCollection);
        return (
            <div>
                {/* {this.props.portfolioCollection.products.map(product => (
                   <div></div> 
                ))} */}
            </div>
        );
    }
}



export default Portfolio;
