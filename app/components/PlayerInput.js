var React = require('react')


class PlayerInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        var value = event.target.value;
        this.setState(function () {
            return {
                username: value
            }
        })

    }
    handleSubmit(event) {
        event.preventDefault();
        this.props.onSubmit(this.props.id, this.state.username)
    }
    render() {
        return (
            <form className="column" onSubmit={this.handleSubmit}>
                <label className="header" htmlFor="username">
                    {this.props.label}
                </label>
                <input
                    id="username"
                    placeholder="Github Username"
                    type="text"
                    autoComplete='off'
                    value={this.state.username}
                    onChange={this.handleChange} />
                <button type="submit"
                    className="button"
                    disabled={!this.state.username}>
                    Submit
              </button>
            </form>
        )
    }
}

module.exports = PlayerInput;