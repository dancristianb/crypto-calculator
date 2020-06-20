import React, {Component} from 'react'

class Search extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const searchResults = this.props.searchResults
            .map(curr =>
                <li key={curr.id}
                    data-id={curr.id}
                    className="currency-list-item"
                    onClick={this.props.handleSelect}
                >
                    <a href="#" className="currency">
                        <span>{curr.name}</span> <span className="currency_symbol">{curr.currency_symbol}</span>
                    </a>
                </li>)

        return (
            <div>
                <h1>Crypto currency portfolio calculator</h1>
                <form>
                    <div className="form-group">
                        <label>Search for a currency:</label><br/>
                        <input onChange={this.props.handleChange}
                               autoComplete="off" type="text" name="name"
                               placeholder="Ex: Bitcoint, Litecoint, Ethereum"
                               value={this.props.name} className="field"/>
                    </div>
                    <div className="currencies-list">
                        {searchResults}
                    </div>
                </form>
            </div>
        )
    }
}

export default Search
