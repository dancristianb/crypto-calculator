import React, {Component} from 'react'

class Calculate extends Component {
    render() {
        return (
            <div>
                <h1>How much of {this.props.active_currency.name} do you
                    own?</h1>
                <form onSubmit={this.props.handleSubmit}>
                    <div className="form-group">
                        <label className="pb-4">Enter amount owned</label><br/>
                        <input
                            onChange={this.props.handleChange}
                            autoComplete="off" type="text" name="amount"
                            placeholder="How much do you own"
                            value={this.props.amount}
                            className="bg-gray-200 appearance-none border-2
                               border-gray-200 rounded w-full py-4 px-4 mt-4
                               text-gray-700 leading-tight focus:outline-none
                               focus:bg-white focus:border-purple-500"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="submit"
                            className="bg-purple-500 text-white font-bold
                                py-2 px-4 mt-4 rounded
                                easy-in hover:bg-purple-700 "
                            value="Calculate My Total"
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default Calculate
