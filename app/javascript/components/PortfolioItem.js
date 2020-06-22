import React, {Component} from 'react'

class PortfolioItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <div className="flex m-1 rounded-lg px-4 py-5 bg-white">
                    <div className="flex-grow">
                        <div className="text-base">Currency:</div>
                        <div className="text-base">{this.props.item.currency.name}</div>
                    </div>

                    <div className="flex-grow">
                        <div className="text-base">Current Price:</div>
                        <div className="text-base">{this.props.item.current_price}</div>
                    </div>

                    <div className="flex-grow">
                        <div className="text-base">Amount In Your Portfolio</div>
                        <div className="text-base">{this.props.item.amount}</div>
                    </div>

                    <div className="flex-grow">
                        <div className="text-base">Current Value:</div>
                        <div className="text-base">{this.props.item.value}</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PortfolioItem
