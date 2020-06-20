import React, {Component} from 'react'
import Search from "./Search";
import Calculate from "./Calculate";
import axios from 'axios'

class PortfolioContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            portfolio: [],
            search_results: [],
            active_currency: null,
            amount: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSelect = this.handleSelect.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleAmount = this.handleAmount.bind(this)
    }

    handleChange(e) {
        axios.post('http://localhost:3000/search', {
            search: e.target.value
        })
            .then((data) => {
                this.setState({
                    search_results: [...data.data.currencies]
                })
            })
            .catch((data) => {
                console.log(data)
            })
    }

    handleSelect(e) {
        e.preventDefault()
        const id = e.target.getAttribute('data-id')
        const activeCurrency = this.state.search_results.find(
            item => item.id == parseInt(id)
        )
        this.setState({
            active_currency: activeCurrency,
            search_results: []
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        const id = this.state.active_currency.id
        const amount = this.state.amount

        axios.post('http://localhost:3000/calculate', {
            id: id,
            amount: amount
        })
            .then((data) => {
                this.setState({
                    portfolio: [...this.state.portfolio, data.data]
                })
            })
            .catch((data) => {
                console.log(data)
            })
    }

    handleAmount(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {

        const searchOrCalculate = this.state.active_currency ?
            <Calculate
                handleSubmit={this.handleSubmit}
                handleChange={this.handleAmount}
                active_currency={this.state.active_currency}
                amount={this.state.amount}
            />
            :
            <Search
                searchResults={this.state.search_results}
                handleChange={this.handleChange}
                handleSelect={this.handleSelect}
            />

        return (
            <div>
                {searchOrCalculate}
            </div>
        )
    }
}

export default PortfolioContainer
