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
                    className="currency-list-item text-gray-700 text-left
                    rounded-sm bg-gray-200 cursor-pointer list-none
                    px-4 py-4 my-4
                    ease-in hover:bg-gray-400"
                    onClick={this.props.handleSelect}
                >
                    <a href="#">
                        <span>{curr.name}</span>
                        <span className="float-right">
                            {curr.currency_symbol}
                        </span>
                    </a>
                </li>)

        return (
            <div>
                <h1>Crypto currency portfolio calculator</h1>
                <form>
                    <div className="form-group">
                        <label className="pb-4">Search for a currency:</label><br/>
                        <input onChange={this.props.handleChange}
                               autoComplete="off" type="text" name="name"
                               placeholder="Ex: Bitcoint, Litecoint, Ethereum"
                               value={this.props.name}
                               className="bg-gray-200 appearance-none border-2
                               border-gray-200 rounded w-full py-4 px-4 mt-4
                               text-gray-700 leading-tight focus:outline-none
                               focus:bg-white focus:border-purple-500"
                        />
                    </div>
                    <div>
                        {searchResults}
                    </div>
                </form>
            </div>
        )
    }
}

export default Search
