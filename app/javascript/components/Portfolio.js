import React, {Component} from 'react'
import PortfolioItem from "./PortfolioItem";

class Portfolio extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const portfolioItems = this.props.portfolio
            .map( (item, index) => <PortfolioItem key={index} item={item}/>)
        const total = this.props.portfolio
            .reduce((total, current) => total + current.value, 0)

        return (
            <div>
                <div className="portfolio-value text-white p-4 px-6">
                    <div className="text-lg">
                        Your total Portfolio value is:
                    </div>
                    <div className="text-2xl">{total}</div>
                </div>
                <div className="portfolio-items">
                    {portfolioItems}
                </div>
            </div>
        )
    }
}

export default Portfolio
